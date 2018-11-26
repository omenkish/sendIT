import UserModel from '../models/user';
import ParcelModel from '../models/parcel';

const parcelObj = new ParcelModel();
const userObj = new UserModel();

class User {

  /**
   * 
   * @returns {object} user object 
   */
  static create(req, res) {
      const user = userObj.create(req.body);
      return res.status(201).send(user);   
  }

  /**
   * 
   * @returns {array of objects} user parcels objects
   */ 
  static getUserParcels(req, res) {
    const parcels = parcelObj.findAll();
    const userParcels = parcels.filter(parcel => parcel.userId === parseInt(req.params.id));

    if (!userParcels) {
      return res.status(404).send('message: No parcel found for this user.')
    }
    return res.status(200).send(userParcels)
  }

  /**
   * 
   * @returns {array of objects} user objects
   */
  static getUsers(req, res) {
    const users = userObj.findUsers();
    return res.status(200).send(users);  
  }

  /**
   * 
   * @returns {object} user object 
   */
  static getUser(req, res) {
    const user = userObj.findUser(parseInt(req.params.id));
    if (!user) {
      return res.status(404).send('message : No user with this Id found');
    }
    return res.status(200).send(user);
    
  }

  /** method to delete a user */
  static delete(req, res) {
    const user = userObj.findUser(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'User not found' });
    }
    const ref = userObj.delete(req.params.id);
    return res.status(204).send(ref);
  }

  /**
   * 
   * @returns {object} user object 
   */
  static update(req, res){
    const user = userObj.findUser(parseInt(req.params.id));
    if (!user) {
      return res.status(404).send({ 'message': ' User not found' })
    }
    const updatedUser = userObj.update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  };
  
}
export default User;