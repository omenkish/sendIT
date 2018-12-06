import crypto from 'crypto';
import dotenv from 'dotenv';

// const crypto = require('crypto');
// const dotenv = require('dotenv');

dotenv.config();

const algorithm = 'aes-128-cbc';
const password = 'secretpassword';
const text = process.env.EMAIL_PASSWORD;

class Password {
  static encrypt()  {
    const cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  static decrypt () {
    const decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(`${Password.encrypt()}`, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }

}

export default Password;
