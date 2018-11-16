import Validator from 'validator';

const CreateParcelValidationMiddleware = (req, res, next) => {
  const CreateParcelRules = {
    userId: 'required',
    Address: 'required',
    presentLocation: 'required',
    price: 'required',
    description: 'required'
  }
  
  const validator = new Validator(req.body, CreateParcelRules);
  if (validator.fails()) {
      return res.status(400).json(validator.errors.all());
  }

  return next();
}

export default CreateParcelValidationMiddleware;