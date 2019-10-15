import dotenv from 'dotenv';
import { Pool } from 'pg';


dotenv.config();
class MyDiary {
 constructor(diary) {
   this.diary = diary;

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

     this.pool = new Pool(config);
     this.pool.on('connect', () => {
       console.log('connected to the Database');
     });
 }

   async select(columns, clause, values) {
    try {
      let query;
      if (clause) {
        query = `SELECT ${columns} FROM ${this.diary} WHERE ${clause}`;
      } else {
        query = ` SELECT ${columns} FROM ${this.diary}`;
      }
      const { rows } = await this.pool.query(query, values);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async insert(columns, selector, values) {
    const query = `INSERT INTO ${this.diary} (${columns}) VALUES (${selector}) returning *`;
    try {
      const { rows } = await this.pool.query(query, values);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async update(columns, clause, values) {
    const query = `UPDATE ${this.diary} SET ${columns} WHERE ${clause} returning *`;
    try {
      const { rows } = await this.pool.query(query, values);
      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  async delete(clause, values) {
    const query = `DELETE FROM ${this.diary} WHERE ${clause} returning *`;
    
    try {
      const { rows } = await this.pool.query(query, values);
      return rows[0];
    } catch (err) {
      throw err;
    }
  }
}
export default MyDiary;


