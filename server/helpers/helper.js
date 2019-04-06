import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Helper {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

  /**
  * comparePassword
  * @param {string} hashPassword 
  * @param {string} password 
  * @returns {Boolean} returns True or False
  */
  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  /**
   * Gnerate Token
   * @param {integer} id
   * @param {string} email
   * @returns {Object} token
   */
  static generateToken(email, id, is_admin) {
    const token = jwt.sign({
      email, id, is_admin
    },
      process.env.JWT_SECRET, { expiresIn: '2d' }
    );
    return token;
  }
}

export default Helper;