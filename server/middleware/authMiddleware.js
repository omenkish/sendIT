import jwt from 'jsonwebtoken';

module.exports = (request, response, next) => {
  try{
    const token = request.headers.authorization.split(" ")[1];
    if(!token){
      return response.status(404).json({'message' : 'Invalid Token'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    next();
  }
  catch(error){
    return response.status(401).json({status: 401, Error: `${error}}`});
  }
 
}