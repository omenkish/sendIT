import UserModel from '../models/userModel';

const User = {
  create (req, res) {
    if(!req.body.username && !req.body.username && !req.body.username) {
      return res.status(400).send('message: All fields are required!');
    }
    else {
      const user = UserModel.create(req.body);
      return res.status(201).send(user);
    }
  }
}