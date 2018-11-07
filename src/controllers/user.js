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

  getUserParcels(req, res) {
    const parcels = ParcelModel.findAll();
    const userParcels = parcels.filter(parcel => parseInt(parcel.userId) === parseInt(req.params.id));

    if(!userParcels){
      return res.status(404).send('message: No parcel found for this user.')
    }
    return res.status(200).send(userParcels)
  }
};

export default User;