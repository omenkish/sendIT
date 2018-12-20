import db from '../db';
import Helper from '../helpers/helper';

class User {
  /**
 * Create A User
 * @param {object} request 
 * @param {object} response
 * @returns {object} user object 
 */
  static async createUser(request, response) {
    const hashPassword = Helper.hashPassword(request.body.password);
    let is_admin;
    const sqltext = `INSERT INTO users(firstname, lastname, othernames, email, phone, password, is_admin)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      returning *`;
      if(request.body.is_admin){
        is_admin = request.body.is_admin;
      }
      else{
        is_admin = false;
      }
    const values = [
      request.body.firstname.toLowerCase(),
      request.body.lastname.toLowerCase(),
      request.body.othernames.toLowerCase(),
      request.body.email.toLowerCase(),
      request.body.phone,
      hashPassword,
      is_admin
    ];

    try {
      const { rows } = await db.query(sqltext, values);
      const token = Helper.generateToken(rows[0].email, rows[0].id)
      return response.status(201).json({status: 201, data: rows[0],token: token});
    } 
    catch(error) {
      if (error.routine === '_bt_check_unique') {
        return response.status(400).json({ status: 400, message: 'User with that EMAIL already exists' })
      }
      return response.status(400).json({status:400, message: `${error}`});
    }
  }

  /**
   * Login
   * @param {object} request
   * @param {object} response
   * @returns {object} user object 
   */

  static async login(request, response){
    const sqlQuery = 'SELECT * FROM users WHERE email = $1';

    try{
      const { rows } = await db.query(sqlQuery, [request.body.email.toLowerCase()]);
      if (!rows[0]) {
        return response.status(404).json({status: 404, message: 'Username/password incorrect'});
      }
      if(!Helper.comparePassword(rows[0].password, request.body.password)){
        return response.status(404).json({status: 404, message: 'Username/password incorrect'});
      }
      const token = Helper.generateToken(rows[0].email, rows[0].id);
      return response.status(200).json({status: 200, data:rows[0], token: token});
    }
    catch(error){
      return response.status(400).json({status: 400, message: 'Error saving user'});
    }

  }

  /**
   * 
   * @param {object} request 
   * @param {object} response 
   * @returns {Array} users
   */
  static async getUsers(request, response) {
    const  findUsersSql = `SELECT id, firstname, lastname, othernames, email, phone, is_admin,
                          registered_on, modified_on FROM users`; 
    try {
      const { rows, rowCount } = await db.query(findUsersSql);
      return response.status(200).json({status: 200, data: rows, count: rowCount });
    }
    catch(error){
      response.status(400).json({status: 400, error: `${error}}`});
    }
  }

  static async getUser(request, response) {
    
    const  findUsersSql = `SELECT id, firstname, lastname, othernames, email, phone, is_admin,
             registered_on, modified_on FROM users WHERE id=$1`; 
    try {
      const { rows, rowCount } = await db.query(findUsersSql, [request.params.id]);
      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'User not found!'});
      }
      return response.status(200).json({status: 200, data: rows[0] });
    }
    catch(error){
      response.status(400).json({status: 400, error: `${error}}`});
    }
  }

  /**
   * method to cancel a parcel delivery order
   * @param {object} request 
   * @param {object} response 
   * @returns {object} parcel orders
   */

  static async makeAdmin(request, response){
    const findUserQuery = 'SELECT * FROM users WHERE id = $1';
    const updateUserQuery = `UPDATE users SET is_admin=true, 
          modified_on=NOW() WHERE id=$1 returning *`;
    try{
        const { rows, rowCount } = await db.query(findUserQuery, [request.params.id]);
      if(rowCount === 0){
        return response.status(404).json({status: 404, message: 'User not found!'});
      }
      if(rows[0].is_admin === true){
        return response.status(201).json({status: 201, message: 'User already an admin!'});
      }
      const result = await db.query(updateUserQuery, [request.params.id]);
      
      return response.status(200).json({status: 200, data: result.rows[0]});
  
    }
    catch(error){
      response.status(400).json({status: 400, error: `${error}`});
    }
  }
  
}

export default User;