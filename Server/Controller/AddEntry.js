/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import { pool } from '../Database/db';
import validateEntry from '../validation/entryValidation';




const postEntry = (req, res) => {
  const { error } = validateEntry.validate(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
 
 const entry = {
   title: req.body.title,
   description: req.body.description,
 };
 pool.connect((err, client, done) => {
  const query = 'INSERT INTO entries(title,description) VALUES($1,$2) RETURNING *';
  const values = [entry.title, entry.description];

  client.query(query, values, (error, result) => {
    done();
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(201).send({
      status: 201,
      result: result.rows[0],
    });
  });
});
};

export default postEntry;
