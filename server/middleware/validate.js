import Validator from 'validatorjs';

class UserValidator {

  static createUser(request, response, next){
    const CreateUserRules = {
      firstname: 'required|string',
      lastname: 'required|string',
      othernames: 'required|string',
      email: 'required|email',
      phone: 'required',
      password: 'required'
    }
    
    const validator = new Validator(request.body, CreateUserRules);
    if (validator.fails()) {
      return response.status(415).json(validator.errors.all());
    }
  
    return next();
  } 

  static login(request, response, next){
    const CreateLoginRules = {
      
      email: 'required|email',
      password: 'required'
    }
    
    const validator = new Validator(request.body, CreateLoginRules);
    if (validator.fails()) {
      return response.status(415).json(validator.errors.all());
    }
  
    return next();
  } 

  static adminOnly(request, response, next){
    const sqlQuery = "SELECT is_admin FROM users WHERE id=$1";
    
      const {rows} = db.query(sqlQuery, [request.user.id]);
      if(rows[0].is_admin === False){
        return response.status(404).json({'Status': '401','Message': 'You do not have permission to access this route'});
      }
      next();

  }

  static createParcel(request, response, next){
    const CreateParcelRules = {
      placed_by: 'required|integer',
      receiver_number: 'required|string',
      weight: 'required|numeric',
      weight_metric: 'required|string',
      sender_address: 'required|string',
      receiver_address: 'required|string',
      current_location: 'required|string'
    }
    
    const validator = new Validator(request.body, CreateParcelRules);
    if (validator.fails()) {
      return response.status(415).json(validator.errors.all());
    }
  
    return next();
  } 

  static getUserById(request, response, next){
      if(!Number(request.user.id)){
        return response.status(400).json({'Status': 400,'ERROR Message':'id must be a number'});
      }
      if(!request.params.id){
        return response.status(404).json({'Status': 404,'ERROR Message':'Parcel Order not found'});
      }

      return next();   
  }

}

export default UserValidator;