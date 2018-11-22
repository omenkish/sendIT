import jwt from 'jsonwebtoken';
import db from '../db';

class Auth {
  
  /**
   * Verify Token
   * @param {object} req 
   * @param {object} res 
   * @param {object} next
   * @returns {object|void} response object 
   */
  static async verifyToken(request, response, next){
    const token = request.headers['x-access-token'];
    if(!token) {
      return response.status(400).json({'status': 400, 'message': 'Token is not provided' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      const text = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await db.query(text, [decoded.id]);
      if(!rows[0]) {
        return res.status(400).json({ 'status': '400', 'message': 'The token you provided is invalid' });
      }
      request.user = { email: decoded.email, id: decoded.id };
      next();
    } catch(error) {
      return response.status(400).json({ 'status': '400', 'message': `${error}` });
    }
  }
}
  
export default Auth;   