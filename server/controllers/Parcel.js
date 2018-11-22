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
          sender_address, receiver_address, current_location) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

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
    
    
      const getParcelsQuery = 'SELECT * FROM parcels WHERE placed_by=$1';
    
      try{
        const { rows, rowCount} = await db.query(getParcelsQuery, [request.user.id]);

        if(rowCount === 0){
          return response.status(404).json({'Status': 404, 'Message': rows});
        }
        return response.status(200).json({'Status': 200, Data: rows, 'Count': `${rowCount}`})
      }
      catch(error){
        return response.status(400).json({'Status': 400, 'Error': `${error}`});
      }
        
  }

  /**
   * method to fetch all parcel orders of a user
   *
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} all parcel orders belonging to a particular user
   */
  static async getAllParcels(request, response){
    const getParcelsQuery = 'SELECT * FROM parcels';
    try{
      const { rows, rowCount} = await db.query(getParcelsQuery);
      return response.status(200).json({'Status': 200, 'Data': rows, 'Count': `${rowCount}`})
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
  }

  
}

export default Parcel;