import Validator from 'validatorjs';

class Validate {

  static createParcel(req, res, next){
    const CreateParcelRules = {
      // id: 'required|digits:5',
      destination: 'required',
      presentLocation: 'required',
      price: 'required|numeric',
      description: 'required'
    }
    
    const validator = new Validator(req.body, CreateParcelRules);
    console.log(req.body);
    if (validator.fails()) {
        return res.status(400).json(validator.errors.all());
    }
  
    return next();
  } 

  static getUserById(){
    return (req, res, next) => {
      if(!Number(req.params.id)){
        return res.status(400).send('id must be a number');
      }
      if(!req.params.id){
        return res.status(404).send('No parcel found with this Id');
      }

      return next();
    }
   
  }

}

export default Validate;
