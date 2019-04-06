import db from '../db/index';
import User from './User';
import sendEmail from '../helpers/email';

class Parcel {


  static randomDigits(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
     let result ="py"
    for (let i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  /**
   * 
   * @param {object} request 
   * @param {object} response 
   * @returns {} parcel order
   */
  static async createParcelOrder(request, response){
    
    let number = Parcel.randomDigits(6);
    const price = request.body.weight * 4.7;
    const getParcelQuery = 'SELECT * FROM parcels WHERE order_number=$1';

    const current_location = 'warehouse';
    const createParcelQuery = `INSERT INTO parcels(placed_by, order_number, receiver_number, description,
                              weight, weight_metric, sender_address, receiver_address, current_location, price, 
                              zip, state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
                              RETURNING *`;
    
    try {
      const { rowCount } = await db.query(getParcelQuery, [number]);
      while( rowCount > 0 ){
        number = Parcel.randomDigits(6);
      }
      const order_number = request.body.number ? request.body.number : number;
      const values = [
        request.user.id,
        order_number,
        request.body.receiver_number,
        request.body.description,
        request.body.weight,
        request.body.weight_metric.toLowerCase(),
        request.body.sender_address.toLowerCase(),
        request.body.receiver_address.toLowerCase(),
        current_location.toLowerCase(),
        price, 
        request.body.zip,
        request.body.state
      ];
      const { rows } = await db.query(createParcelQuery, values);
        return response.status(201).json({message:'Parcel order placed successfully', parcel: rows[0] });
    }
    catch(error) {
      return response.status(500).json({message: `${error}`});
    }
  }

  /**
   * method to fetch all parcel orders for a particular user
   * Can be accessed by only the owner
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders by a user
   */
  static async getUserParcels(request, response){
    
    const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1 ORDER BY created_at DESC';
    const findUser = 'SELECT * FROM users WHERE id=$1';
    try{
      const { rowCount: userCount } = await db.query(findUser, [request.params.id]);
      if(userCount === 0) {
        return response.status(404).json({ message: 'User not found'});
      }
      const { rows, rowCount} = await db.query(getParcelsQuery, [request.params.id]);
      return response.status(200).json({ parcels: rows, count: `${rowCount}`})
    }
    catch(error){
      return response.status(500).json({ message: `${error}`});
    }    
  }

  /**
   * method to fetch all parcel orders for a particular user
   * Can be accessed by only the owner
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders by a user
   */
  static async getCurrentUserParcels(request, response){
    
    const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1 ORDER BY created_at DESC';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery, [request.user.id]);
      return response.status(200).json({parcels: rows, count: rowCount})
    }
    catch(error){
      return response.status(500).json({ message: `${error}`});
    }    
  }

  /**
   * method to fetch all parcel orders
   *
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders
   */
  static async getAllParcels(request, response){
    const getParcelsQuery = 'SELECT * FROM parcels ORDER BY created_at DESC';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery);
      return response.status(200).json({parcels: rows, count: `${rowCount}`})
    }
    catch(error){
      return response.status(500).json({ message: `${error}`});
    }
  }

  /**
   * method to fetch particular parcel order
   * @param {object} request 
   * @param {object} response 
   * @returns {object} particular parcel
   */
  static async getParcelById(request, response){
    const getParcelQuery = 'SELECT * FROM parcels WHERE order_number=$1';
    try{
      const { rows, rowCount } = await db.query(getParcelQuery, [request.params.id]);
      if( rowCount === 0 ){
        return response.status(404).json({message:' Order not found'});
      }
      return response.status(200).json({ parcel: rows[0]}) ;     
    }
    catch(error){
      return response.status(500).json({message: `${error}`});
    }
  }

  /**
   * method to cancel a parcel delivery order
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

  static async cancelParcelOrder(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE order_number = $1 AND placed_by=$2';
    const updateParcelQuery = `UPDATE parcels SET cancelled=true, 
          modified_at=NOW() WHERE order_number=$1 returning *`;
    try{
        const { rows, rowCount } = await db.query(findParcelQuery, [request.params.id, request.user.id]);
      if(rowCount === 0){
        return response.status(404).json({ message: 'You have no order with this id'});
      }
      if(rows[0].cancelled === true){
        return response.status(400).json({ message: 'This parcel delivery order is already cancelled'})
      }
      const {rows: result} = await db.query(updateParcelQuery, [request.params.id]);
      return response.status(200).json({message: 'Your order has been cancelled successfully', parcel: result[0]});
  
    }
    catch(error){
      return response.status(500).json({message: `${error}`});
    }
  }

  /**
   * method to update parcel delivery location
   * @param {object} request 
   * @param {object} response 
   * @returns {object} updated parcel order
   */

  static async updateCurrentLocation(request, response){

    const findParcelQuery = `SELECT parcels.*, users.email, users.firstname,
                             users.lastname FROM parcels JOIN users 
                             ON parcels.placed_by=users.id WHERE parcels.order_number=$1;`

    const updateParcelQuery = `UPDATE parcels SET current_location=$1,
                              status='transiting', 
                              modified_at=NOW() WHERE order_number=$2 returning *`;

    const values = [
      request.body.current_location,
      request.params.id
    ];

    const emailMessage = `<h2>Parcel Location Change</h2>
                          <p> Your Parcel delivery order is now at 
                          <strong>${request.body.current_location}</strong><p>
                          <p> Thanks, SendIT team...<p>
                          `;
    const subject = 'Parcel location change';
    try{
        const { rows, rowCount } = await db.query(findParcelQuery, [request.params.id]);
      if(rowCount === 0){
        return response.status(404).json({ message: 'Order not found'});
      }

      const result = await db.query(updateParcelQuery, values);
      sendEmail(rows[0].email, subject, emailMessage);
      return response.status(200).json({ message:'Location updated successfully', parcel: result.rows[0]});
  
    }
    catch(error){
      return response.status(500).json({ message: `${error}`});
    }
   }


  /**
   * method to change parcel delivery location
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

   static async changeDestination(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE order_number = $1 AND placed_by = $2 AND status != \'delivered\'';
    const updateParcelQuery = `UPDATE parcels SET receiver_address=$1, zip=$2, state=$3,
          modified_at=NOW() WHERE order_number=$4 returning *`;

    const values = [
      request.body.receiver_address,
      request.body.zip,
      request.body.state,
      request.params.id
    ];
    try{
        const { rowCount } = await db.query(findParcelQuery, [request.params.id, request.user.id]);
      if(rowCount === 0){
        return response.status(404).json({message: 'Order not found'});
      }

      const { rows } = await db.query(updateParcelQuery, values);
      return response.status(200).json({ message:'destination updated successfully', parcel: rows[0]});
  
    }
    catch(error){
      return response.status(500).json({message: `${error}`});
    }
   }

  
   static async markAsDelivered(request, response){

    const findParcelQuery =  `SELECT parcels.*, users.email, users.firstname,
                              users.lastname FROM parcels JOIN users 
                              ON parcels.placed_by=users.id WHERE parcels.order_number=$1`;
    const updateParcelQuery = `UPDATE parcels SET status='delivered', 
          modified_at=NOW() WHERE order_number=$1 returning *`;

    const values = [
      request.params.id
    ];

    try{
        const { rows } = await db.query(findParcelQuery, [request.params.id]);
      if(rows[0].status === 'pending'){
        return response.status(400).json({message: 'Pending orders cannot be marked as delivered'});
      }
      if(rows[0].cancelled === true){
        return response.status(400).json({message: 'Cannot change delivery status of cancelled order!'})
      }
      const parcelOrderNo = rows[0].order_number;
      const emailMessage = `<h2>Parcel Delivered</h2>
                          <p> Your Parcel with order number <a href="#">${parcelOrderNo}</a> has been delivered.<br/> 
                          <strong>If there is any issue please contact us within the next 1 working day.</strong><p>
                          <p> Thanks, Omenkish SendIT team...<p>
                          `;
      const subject = 'Parcel Delivery Confirmation';
      const {rows:result} = await db.query(updateParcelQuery, values);
      sendEmail(rows[0].email, subject, emailMessage);
      return response.status(200).json({message:'Parcel successfully marked as delivered', parcel: result[0]});
  
    }
    catch(error){
      return response.status(500).json({message: `${error}`});
    }
   }
}

export default Parcel;