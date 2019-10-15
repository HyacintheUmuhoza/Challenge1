import { pool } from '../Database/db';

const getAllEntries = (req, res) => {
  pool.connect((err, client, done) => {
    const query = 'SELECT * FROM entries;';
    client.query(query, (error, result) => {
      done();
      if (error) {
        res.status(400).json({ error });
      } 
      if (result.rows < '1') {
        res.status(404).send({
        status: 404,
        message: 'No entry found',
        });
      } else {
        res.status(200).send({
        status: 200,
        message: 'Entries retrieved Succesfully',
        entries: result.rows,
        });
      }
    });
  });
  };

  export default getAllEntries;
