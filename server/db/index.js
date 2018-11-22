import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.DATABASE_URL || 'postgres://lquxwgaw:RgsKAn2mJNGS3y_4jd90R85DqI-6e8mS@pellefant.db.elephantsql.com:5432/lquxwgaw';
const pool = new Pool ({connectionString});

export default {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object 
   */
  query(text, params){
    return new Promise((resolve, reject) => {
      pool.query(text,params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}