import db from '../db/index'
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@127.0.0.1:5432/sendit';
const pool = new Pool ({connectionString});

class Parcels {

  constructor(){
    Parcels.dropUsersTable();
    Parcels.dropParcelsTable();
    Parcels.createUsersTable();
    Parcels.createParcelsTable();
  }
  static createUsersTable() {
    const sqlText = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, 
        firstname text not null,  lastname text not null,
        othernames text not null,
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
        console.log('=================== ERROR',err);
      });
  }

  static dropUsersTable() {
    const sql = 'DROP TABLE IF EXISTS users CASCADE';
    pool.query(sql)
      .then((res) => {
        console.log('Users Table successfully dropped.');
       
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
      receiver_number VARCHAR(255) not null,
      weight FLOAT not null, weight_metric text not null,
      sent_on TIMESTAMP DEFAULT NOW(), delivered_on TIMESTAMP DEFAULT NOW(),
      status text DEFAULT 'pending', cancelled boolean DEFAULT False,
      sender_address text not null, receiver_address text not null,
      current_location text not null,
      created_at TIMESTAMP DEFAULT NOW(), 
      modified_at TIMESTAMP DEFAULT NOW())`;
  db.query(sqlText)
    .then((res) => {
      console.log('Parcels Table successfully created....');
      console.log('============================== ');
      pool.end();
    })
    .catch((err) => {
      console.log('=================== ERROR',err);
      pool.end();
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
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  }

  static clearTables(){
    const usersTable = 'DELETE * FROM users';
    const parcelsTable = 'DELETE * FROM parcels';
    pool.query(parcelsTable)
      .then(res => {
        pool.query(usersTable)
        .then(res=>{
          console.log('Tables successfully cleared')
          pool.end();
        }).catch(err => {
          console.log('--------------------- deep catch', err);
          pool.end();
        });
       
      }).catch(err => {
        console.log('......................outer catch', err);
      })
  }

}
export default Parcels;
