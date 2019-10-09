import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
} = process.env;

const config = {
  user: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
};

const pool = new Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});


const createTables = () => {
    const registers = `CREATE TABLE IF NOT EXISTS 
    users(
       user_id serial PRIMARY KEY,
       firstname VARCHAR (50) NOT NULL,
       lastname VARCHAR (50) NOT NULL,
       password VARCHAR (50) NOT NULL,
       email VARCHAR (355) UNIQUE NOT NULL,
       created_on TIMESTAMP NOT NULL,
       last_login TIMESTAMP
    )`;
    const diaries = `CREATE TABLE IF NOT EXISTS
        entries(
         id SERIAL PRIMARY KEY,
         title VARCHAR(128) NOT NULL,
         description VARCHAR(128) NOT NULL
        )`;
    pool.query(`${registers};${diaries}`)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

createTables();

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});
  
  
 
  module.exports = { createTables, pool };
  
  require('make-runnable');
