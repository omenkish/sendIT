import db from '../db/index';
import User from './User';

class Parcel {

  /**
   * 
   * @param {object} request 
   * @param {object} response 
   * @returns {} parcel order
   */
  static async createParcelOrder(request, response){
    const createParcelQuery = `INSERT INTO parcels(placed_by, receiver_number, weight, weight_metric, 
          sender_address, receiver_address, current_location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [
      request.user.id,
      request.body.receiver_number,
      request.body.weight,
      request.body.weight_metric,
      request.body.sender_address.toLowerCase(),
      request.body.receiver_address.toLowerCase(),
      request.body.current_location.toLowerCase()
    ];
    try {
      if(!request.user.id){
        return response.status(401).json({'Status': 401, 'Message': `${error}`});
      }
      const { rows } = await db.query(createParcelQuery, values);
      return response.status(201).json({'Status':'201', 'Message':'Parcel inserted successfully', 'Data': rows[0] });
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
  }

  /**
   * method to fetch all parcel orders for a particular user
   * Can be accessed by only the owner
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders
   */
  static async getUserParcels(request, response){
    
      const id = parseInt(request.params.id);
      if(id === parseInt(request.user.id)){
        const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1';
        try{
          const { rows, rowCount} = await db.query(getParcelsQuery, [request.user.id]);
  
          if(rowCount === 0){
            return response.status(404).json({'Status': 404, 'Message': 'No parcels found for this user'});
          }
          return response.status(200).json({'Status': 200, Data: rows, 'Count': `${rowCount}`})
        }
        catch(error){
          return response.status(400).json({'Status': 400, 'Error': `${error}`});
        }
      }
      else{
        return response.status(404).json({'Status': 404, 'Message': 'specify a valid id'});
      }
      
    
      
        
  }

  /**
   * method to fetch all parcel orders of a user
   *
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders
   */
  static async getAllParcels(request, response){
    const getParcelsQuery = 'SELECT * FROM parcels';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery);
      if(rowCount === 0){
        return response.status(404).json({'Status':'404', 'message':' You currently have no parcel order'});
      }
      return response.status(200).json({'Status': 200, 'Data': rows, 'Count': `${rowCount}`})
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
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
      if( rowCount < 1 ){
        return response.status(404).json({'Status':'404', 'message':' Order not found'});
      }
      return response.status(200).json({'status': 200, 'Data': rows[0]}) ;     
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
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
      if(rowCount === 1){
        return response.status(404).json({'Status': 404,'Message': 'No order with the specified id exists for the user'});
      }

      const result = await db.query(updateParcelQuery, [request.params.id]);
      return response.status(200).json({'Status': 200,'Data': result.rows[0]});
  
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
  }

  /**
   * method to update parcel delivery location
   * @param {object} request 
   * @param {object} response 
   * @returns {object} updated parcel order
   */

   static async updateCurrentLocation(request, response){

    const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1 ';
    const updateParcelQuery = `UPDATE parcels SET current_location=$1, 
          modified_at=NOW() WHERE id=$2 returning *`;

    const values = [
      request.body.current_location,
      request.params.id
    ];
    try{
        const { rowCount } = await db.query(findParcelQuery, [request.params.id]);
      if(rowCount < 1){
        return response.status(404).json({'Status': 404,'Message': 'Order not found'});
      }

      const result = await db.query(updateParcelQuery, values);
      return response.status(200).json({'Status': 200,'Message':'Location updated successfully','Data': result.rows[0]});
  
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
   }

  /**
   * method to change parcel delivery location
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

   static async changeDestination(request, response){
    const findParcelQuery = 'SELECT * FROM parcels WHERE id = $1 AND placed_by = $2 AND status != "delivered"';
    const updateParcelQuery = `UPDATE parcels SET receiver_address=$1, 
          modified_at=NOW() WHERE id=$2 returning *`;

    const values = [
      request.body.receiver_address,
      request.params.id
    ];
    try{
        const { rowCount } = await db.query(findParcelQuery, [request.params.id, request.user.id]);
      if(rowCount < 1){
        return response.status(404).json({'Status': 404,'Message': 'Order not found'});
      }

      const result = await db.query(updateParcelQuery, values);
      return response.status(200).json({'Status': 200,'Message':'destination updated successfully','Data': result.rows[0]});
  
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
   }
}

export default Parcel;