import db from '../db/index'
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST  :  process.env.DATABASE_URL;
const pool = new Pool ({connectionString});

class Parcels {

  constructor(){
    Parcels.createUsersTable();
    Parcels.createParcelsTable();
  }
  static createUsersTable() {
    const sqlText = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, 
        firstname text not null,  lastname text not null,
        othernames text ,
        email text UNIQUE not null, phone text not null,
        password text not null, is_admin boolean DEFAULT False,
        registered_on TIMESTAMP DEFAULT NOW(), 
        modified_on TIMESTAMP DEFAULT NOW())`;
    pool.query(sqlText)
      .then((res) => {
        console.log('users Table successfully created....');
        console.log('******************************');
      })
      .catch((err) => {
        console.log('=================== ERROR FOR users table',err);
      });
  }

  static dropUsersTable() {
    const sql = 'DROP TABLE IF EXISTS users CASCADE';
    pool.query(sql)
      .then((res) => {
        console.log('Users Table successfully dropped.');
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  /**
   * create parcels table
   */
  static createParcelsTable (){
    const sqlText = `CREATE TABLE IF NOT EXISTS parcels (id SERIAL PRIMARY KEY,
      placed_by INTEGER not null REFERENCES users (id) ON DELETE CASCADE,
      order_number text not null, description text not null,
      receiver_number VARCHAR(255) not null,
      weight FLOAT not null, weight_metric text not null,
      sent_on TIMESTAMP DEFAULT NOW(), delivered_on TIMESTAMP DEFAULT null,
      status text DEFAULT 'pending', cancelled boolean DEFAULT False,
      sender_address text not null, receiver_address text not null,
      current_location text not null,
      price FLOAT not null, zip int not null, state text not null,
      created_at TIMESTAMP DEFAULT NOW(),
      modified_at TIMESTAMP DEFAULT NOW())`;
  db.query(sqlText)
    .then((res) => {
      console.log('Parcels Table successfully created....');
      console.log('============================== ');
      
    })
    .catch((err) => {
      console.log('=================== ERROR for parcels table',err);
      
    });
  }
  
  /**
   * Drop parcels Table
   */
  static dropParcelsTable() {
    const sql = 'DROP TABLE IF EXISTS parcels';
    pool.query(sql)
      .then((res) => {
        console.log('Parcels table deleted successfully');
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  static clearParcelsTable() {
    const sql = 'DELETE FROM parcels';
    pool.query(sql)
      .then((res) => {
        console.log('Parcels table cleared');
        
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  }

  static clearUsersTable() {
    const sql = 'DELETE FROM users';
    pool.query(sql)
      .then((res) => {
        console.log('Users table cleared');
        
      
      })
      .catch((err) => {
        console.log(err);
        
       
      });
  }
  static clearTables(){
    Parcels.clearParcelsTable();
    Parcels.clearUsersTable();
  }
  

}
export default Parcels;
