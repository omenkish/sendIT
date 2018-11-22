import db from '../db';
import Helper from '../helpers/helper';
import '@babel/polyfill';


class User {
  /**
 * Create A User
 * @param {object} request 
 * @param {object} response
 * @returns {object} user object 
 */
  static async createUser(request, response) {
    const hashPassword = Helper.hashPassword(request.body.password);

    const sqltext = `INSERT INTO users(firstname, lastname, othernames, email, phone, password)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`;
    const values = [
      request.body.firstname.toLowerCase(),
      request.body.lastname.toLowerCase(),
      request.body.othernames.toLowerCase(),
      request.body.email.toLowerCase(),
      request.body.phone,
      hashPassword,
    ];

    try {
      const { rows } = await db.query(sqltext, values);
      const token = Helper.generateToken(rows[0].email, rows[0].id)
      return response.status(201).json(`{'Status': '201','Message': 'Signup successful. Please copy your token','Token': ${token}}`);
    } 
    catch(error) {
      if (error.routine === '_bt_check_unique') {
        return response.status(400).json({ 'Status': '400','message': 'User with that EMAIL already exists' })
      }
      return response.status(400).json({'Error': `${error}`});
    }
  }

  /**
   * Login
   * @param {object} request
   * @param {object} response
   * @returns {object} user object 
   */

  static async login(request, response){
    if(!request.body.email || !request.body.password){
      return response.status(415).json({'Status': '415','message': 'Some values are missing'});
    }
    if (!Helper.isValidEmail(request.body.email)) {
      return response.status(400).json({ 'Status': '400','message': 'Please enter a valid email address' });
    }
    const sqlQuery = 'SELECT * FROM users WHERE email = $1';

    try{
      const { rows } = await db.query(sqlQuery, [request.body.email]);
      if (!rows[0]) {
        return response.status(400).json({'Status':'400','message': 'The credentials you provided is incorrect'});
      }
      if(!Helper.comparePassword(rows[0].password, request.body.password)){
        return response.status(400).json({'Status': '400','Message': 'This password is incorrect'});
      }
      const token = Helper.generateToken(rows[0].email, rows[0].id);
      return response.status(200).json({'Status': 200, 'Copy this TOKEN ': token});
    }catch(error){
      return response.status(400).json(`{'Status': '400','Error': ${error}}`);
    }

  }
  
}

export default User;