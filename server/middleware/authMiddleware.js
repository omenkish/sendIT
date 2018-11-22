import jwt from 'jsonwebtoken';
import db from '../db';

// class Auth {
  
//   /**
//    * Verify Token
//    * @param {object} req 
//    * @param {object} res 
//    * @param {object} next
//    * @returns {object|void} response object 
//    */
//   static async verifyToken(request, response, next){
    
//     try {
//       const token = request.headers['x-access-token'];
//     if(!token) {
//       return response.status(400).json({'status': 400, 'message': 'Token is not provided' });
//     }
//       const decoded = await jwt.verify(token, process.env.JWT_SECRET);
//       const text = 'SELECT * FROM users WHERE id = $1';
//       const { rows } = await db.query(text, [decoded.id]);
//       if(!rows[0]) {
//         return response.status(400).json({ 'status': 400, 'message': 'The token you provided is invalid' });
//       }
//       request.user = { email: decoded.email, id: decoded.id };
//       next();
//     } 
//     catch(error) {
//       return response.status(400).json({ status: 400, 'message': `${error}` });
//     }
//   }
// }
  
// export default Auth;   

module.exports = (request, response, next) => {
  try{
    const token = request.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    next();
  }
  catch(error){
    return response.status(401).json(error);
  }
 
}