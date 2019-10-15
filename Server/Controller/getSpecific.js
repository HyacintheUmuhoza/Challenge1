import { pool } from '../Database/db';

const getEntry = (req, res) => {
  const id = parseInt(req.params.id, 10);

  pool.connect((err, client, done) => {
    const values = [id];
    const query = 'SELECT * FROM entries WHERE id = $1;';
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        return res.status(400).json({ error });
      }
      if (result.rows < 1) {
        return res.status(404).send({
          status: 404,
          message: 'No entry found',
        });
      } else {
        return res.status(200).send({
          status: 200,
          message: 'Entry Succsesful retrieved',
          entries: result.rows,
        });
      }
    });
  });
};

export default getEntry;
