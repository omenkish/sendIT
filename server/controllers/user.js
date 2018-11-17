import UserModel from '../models/user';
import ParcelModel from '../models/parcel';

class User {

  /**
   * 
   * @returns {object} user object 
   */
  static create() {
    return (req, res) => {
      const user = UserModel.create(req.body);
      return res.status(201).send(user);
    }
  }

  /**
   * 
   * @returns {array of objects} user parcels objects
   */
  static getUserParcels() {
    return (req, res) => {
      const parcels = ParcelModel.findAll();
      const userParcels = parcels.filter(parcel => parcel.userId === req.params.id);

      if (!userParcels) {
        return res.status(404).send('message: No parcel found for this user.')
      }
      return res.status(200).send(userParcels)
    }
  }

  /**
   * 
   * @returns {array of objects} user objects
   */
  static getUsers() {
    return (req, res) => {
      const users = UserModel.findUsers();
      return res.status(200).send(users);
    }
  }

  /**
   * 
   * @returns {object} user object 
   */
  static getUser() {
    return (req, res) => {
      const user = UserModel.findUser(req.params.id);
      if (!user) {
        return res.status(404).send('message : No user with this Id found');
      }
      return res.status(200).send(user);
    }
  }

  /** method to delete a user */
  static delete() {
    return (req, res) => {
      const user = UserModel.findUser(req.params.id);
      if (!user) {
        return res.status(404).send({ 'message': 'User not found' });
      }
      const ref = UserModel.delete(req.params.id);
      return res.status(204).send(ref);
    }
  }

  /**
   * 
   * @returns {object} user object 
   */
  static update(){
    return (req, res) => {
      const user = UserModel.findUser(req.params.id);
      if (!user) {
        return res.status(404).send({ 'message': ' User not found' })
      }
      const updatedUser = UserModel.update(req.params.id, req.body);
      return res.status(200).send(updatedUser);
    }
  };
  
}
export default User;