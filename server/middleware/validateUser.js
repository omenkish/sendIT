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

  static adminOnly(request, response, next){
    const id = request.user.id;
    const sqlQuery = "SELECT is_admin FROM users WHERE id=$1"

  }

  static getUserById(request, response, next){
      if(!Number(req.params.id)){
        return res.status(400).json('id must be a number');
      }
      if(!req.params.id){
        return res.status(404).json('No parcel found with this Id');
      }

      return next();   
  }

}

export default UserValidator;