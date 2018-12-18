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
    let order_number =Parcel.randomDigits(6);
    const price = request.body.weight * 4.7;
    const getParcelQuery = 'SELECT * FROM parcels WHERE order_number=$1';
    try{
      const { rows, rowCount } = await db.query(getParcelQuery, [order_number]);
      while( rowCount > 0 ){
        order_number = Parcel.randomDigits(6);
      }
    }
    catch(e){
      return response.status(400).json({error: e});
    }
    const current_location = 'warehouse';
    const createParcelQuery = `INSERT INTO parcels(placed_by, order_number, receiver_number, description,
                              weight, weight_metric, sender_address, receiver_address, current_location, price, 
                              zip, state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
                              RETURNING *`;
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
    try {
      if(!request.user.id){
        return response.status(401).json({status: 401, message: 'Please sign in to access this area'});
      }
      const { rows } = await db.query(createParcelQuery, values);
      return response.status(201).json({status: 201, message:'Parcel order placed successfully' });
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
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
    
    const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery, [request.params.id]);

      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'No parcels found for this user'});
      }
      return response.status(200).json({status: 200, data: rows, count: `${rowCount}`})
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
    }    
  }

  /**
   * method to fetch all parcel orders for a particular user
   * Can be accessed by only the owner
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders by a user
   */
  static async getMyParcels(request, response){
    
    const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery, [request.user.id]);

      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'You currently have no parcel delivery order'});
      }
      return response.status(200).json({status: 200, data: rows, count: rowCount})
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
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
      if(rowCount === 0){
        return response.status(404).json({status: 404, message:' No parcel delivery order in the system!'});
      }
      return response.status(200).json({status: 200, data: rows, count: `${rowCount}`})
    }
    catch(error){
      return response.status(400).json({ status: 400, message: `${error}`});
    }
  }

  /**
   * method to fetch particular parcel order
   * @param {object} request 
   * @param {object} response 
   * @returns {object} particular parcel
   */
  static async getParcelById(request, response){
    const getParcelQuery = 'SELECT * FROM parcels WHERE id=$1';
    try{
      const { rows, rowCount } = await db.query(getParcelQuery, [request.params.id]);
      if( rowCount === 0 ){
        return response.status(404).json({status:404, message:' Order not found'});
      }
      return response.status(200).json({status: 200, data: rows[0]}) ;     
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
    }
  }

  static async getUserParcelById(request, response){
    const getParcelQuery = 'SELECT * FROM parcels WHERE id=$1 and placed_by=$2';
    try{
      const { rows, rowCount } = await db.query(getParcelQuery, [request.params.id, request.user.id]);
      if( rowCount === 0 ){
        return response.status(404).json({status:404, message:' Order not found'});
      }
      return response.status(200).json({status: 200, data: rows[0]}) ;     
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
    }
  }

  /**
   * method to cancel a parcel delivery order
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

  static async cancelParcelOrder(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1 AND placed_by=$2';
    const updateParcelQuery = `UPDATE parcels SET cancelled=true, 
          modified_at=NOW() WHERE id=$1 returning *`;
    try{
        const { rows, rowCount } = await db.query(findParcelQuery, [request.params.id, request.user.id]);
      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'No order with the specified id exists for the user'});
      }
      if(rows[0].cancelled === true){
        return response.status(400).json({status:400, message: 'This parcel delivery order is already cancelled'})
      }
      const result = await db.query(updateParcelQuery, [request.params.id]);
      return response.status(200).json({status: 200, message: 'Your order has been cancelled successfully'});
  
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
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
                             ON parcels.placed_by=users.id WHERE parcels.id=$1;`

    const updateParcelQuery = `UPDATE parcels SET current_location=$1,
                              status='transiting', 
                              modified_at=NOW() WHERE id=$2 returning *`;

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
        return response.status(404).json({status: 404, message: 'Order not found'});
      }

      const result = await db.query(updateParcelQuery, values);
      sendEmail(rows[0].email, subject, emailMessage);
      return response.status(200).json({status: 200, message:'Location updated successfully'});
  
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
    }
   }


  /**
   * method to change parcel delivery location
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

   static async changeDestination(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1 AND placed_by = $2 AND status != \'delivered\'';
    const updateParcelQuery = `UPDATE parcels SET receiver_address=$1, zip=$2, state=$3,
          modified_at=NOW() WHERE id=$4 returning *`;

    const values = [
      request.body.receiver_address,
      request.body.zip,
      request.body.state,
      request.params.id
    ];
    try{
        const { rowCount } = await db.query(findParcelQuery, [request.params.id, request.user.id]);
      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'Order not found'});
      }

      const result = await db.query(updateParcelQuery, values);
      return response.status(200).json({status: 200, message:'destination updated successfully'});
  
    }
    catch(error){
      return response.status(400).json({status: 400, message: `${error}`});
    }
   }

  //  static async markAsTransiting(request, response){
  //   const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1';
  //   const updateParcelQuery = `UPDATE parcels SET status='transiting', 
  //         modified_at=NOW() WHERE id=$1 returning *`;

    
  //   try{
  //       const { rows, rowCount } = await db.query(findParcelQuery, [request.params.id]);
  //     if(rowCount === 0){
  //       return response.status(404).json({status: 404, message: 'Order not found'});
  //     }
  //     if(rows[0].status === 'transiting'){
  //       return response.status(400).json({status:400, message: 'This parcel order is already on transit'})
  //     }
  //     if(rows[0].cancelled === true){
  //       return response.status(400).json({status:400, message: 'Cannot change delivery status of cancelled order!'})
  //     }
  //     const result = await db.query(updateParcelQuery, [request.params.id]);
  //     return response.status(200).json({status: 200, message:'Parcel now on transit...please change the current location'});
  
  //   }
  //   catch(error){
  //     return response.status(400).json({status: 400, error: `${error}`});
  //   }
  //  }

   static async markAsDelivered(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1 AND status = \'transiting\'';
    const updateParcelQuery = `UPDATE parcels SET status='delivered', 
          modified_at=NOW() WHERE id=$1 returning *`;

    const values = [
      request.params.id
    ];
    try{
        const { rows, rowCount } = await db.query(findParcelQuery, [request.params.id]);
      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'Pending orders cannot be marked as delivered'});
      }
      if(rows[0].cancelled === true){
        return response.status(400).json({status:400, message: 'Cannot change delivery status of cancelled order!'})
      }
      const result = await db.query(updateParcelQuery, values);
      return response.status(200).json({status: 200, message:'Parcel successfully marked as delivered'});
  
    }
    catch(error){
      return response.status(400).json({status: 400, error: `${error}`});
    }
   }
}

export default Parcel;