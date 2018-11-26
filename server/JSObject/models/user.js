import moment from 'moment';
import uuidv4 from 'uuid/v4';

class User {

  /**
   * class constructor
   * @constructor
   */
  constructor (data) {
    this.users = data? data : [
      {
        id: 1,
        username: 'omenkish',
        email: 'omenkish@gmail.com',
        password: 'pass',
        createdDate: this.currentTime(),
        modifiedDate: this.currentTime()
      }
    ];
  }

  /**
   * 
   * @returns formated date
   */
  currentTime () {
    return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  }
  /**
   * 
   * @returns {object} user object
   */
  create (data){
    const newUser = {
      id: this.users.length + 1,
      username: data.username || '',
      email: data.email || '',
      password: data.password || '',
      createdDate: this.currentTime(),
      modifiedDate: this.currentTime()
    };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * 
   * @param  id
   * @returns {object} parcel order object
   */
  findUser (id) {
    return this.users.find(user => user.id === parseInt(id));
  }

  /**
   * 
   * @returns {object} all parcel order objects
   */
  findUsers (){
    return this.users;
  }

  /**
   * @param id
   * @param data
   * @returns {object} all parcel order objects
   */
  update(id, data) {
    const user = this.findUser(parseInt(id));
    const index = this.users.indexOf(user);
    this.users[index].username = data['username'] || user.username;
    this.users[index].email = data['email'] || user.email;
    this.users[index].password = data['password'] || user.password;
    this.users[index].modifiedDate = this.currentTime();
    return this.users[index];
  }

  /**
   * 
   * @param id 
   * @returns {} empty array
   */

  delete (id) {
    const user = this.findUser(id);
    const index = this.users.indexOf(user);
    this.users.splice(index,1);
    return {};
  }
}

export default User;

