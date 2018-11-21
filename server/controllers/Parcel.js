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
      request.body.placed_by,
      request.body.receiver_number,
      request.body.weight,
      request.body.weight_metric,
      request.body.sender_address,
      request.body.receiver_address,
      request.body.current_location
    ];
    try {
      const { rows } = await db.query(createParcelQuery, values);
      return response.status(201).json({'Status':'201', 'Message':'Parcel inserted successfully', 'Data': rows[0] });
    }
    catch(error){
      return response.status(400).json({'Status': 400, 'Error': `${error}`});
    }
  }

  
  
}

export default Parcel;