import jwt from 'jsonwebtoken';

export default (request, response, next) => {
  try{
    if(!request.headers.authorization){
        return response.status(401).json({status: 401 , message : 'You do not have access to this page. Provide a valid token'});
    }
    const token = request.headers.authorization.split(" ")[1];
    if(!token){
      return response.status(401).json({message  : 'Invalid Token'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    return next();
  }
  catch(error){
    return response.status(401).json({message: ` This is the error ${error}}`});
  }
 
}