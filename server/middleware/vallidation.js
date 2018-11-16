import Validator from 'validatorjs';

const CreateParcelValidationMiddleware = (req, res, next) => {
  const CreateParcelRules = {
    userId: 'required|digits:5',
    address: 'required',
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
};

const GetParcelById = (req, res, next) => {
  const FetchParcelsRules = {
    id: ''
  }
}

export default CreateParcelValidationMiddleware;