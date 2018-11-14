import UserModel from '../models/userModel';
import ParcelModel from '../models/parcelOrder';

const User = {
  create (req, res) {
    if(!req.body.username && !req.body.username && !req.body.username) {
      return res.status(400).send('message: All fields are required!');
    }
    else {
      const user = UserModel.create(req.body);
      return res.status(201).send(user);
    }
  },

  getUserParcels (req, res) {
    const parcels = ParcelModel.findAll();
    const userParcels = parcels.filter(parcel => parcel.userId === req.params.id);

    if(!userParcels){
      return res.status(404).send('message: No parcel found for this user.')
    }
    return res.status(200).send(userParcels)
  },

  getUsers (req,res) {
    const users = UserModel.findUsers();
    return res.status(200).send(users);
  },

  getUser(req, res) {
    const user = UserModel.findUser(req.params.id);
    if(!user){
      return res.status(404).send('message : No user with this Id found');
    }
    return res.status(200).send(user);
  },

  delete(req, res){
    const user = UserModel.findUser(req.params.id);
    if(!user){
      return res.status(404).send({'message': 'User not found'});
    }
    const ref = UserModel.delete(req.params.id);
    return res.status(204).send(ref);
  },

  update (req, res){
    const user = UserModel.findUser(req.params.id);
    if(!user){
      return res.status(404).send({'message': ' User not found'})
    }
    const updatedUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  }
};

export default User;