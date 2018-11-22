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
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */

  /**
   * Gnerate Token
   * @param {string} id
   * @returns {string} token
   */
  static generateToken(email, id) {
    const token = jwt.sign({
      email, id
    },
      process.env.JWT_SECRET, { expiresIn: '2d' }
    );
    return token;
  }
}

export default Helper;