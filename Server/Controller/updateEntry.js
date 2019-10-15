import { pool } from '../Database/db';
import validateEntry from '../validation/entryValidation';



const putEntry = (req, res) => {
const { error } = validateEntry.validate(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
const id = parseInt(req.params.id, 10);
const entry = {
  title: req.body.title,
  description: req.body.description,
};
pool.connect((err, client, done) => {
  const query = 'UPDATE entries SET title = $1,description = $2 WHERE id = $3;';
  const values = [entry.title, entry.description, id];
  client.query(query, values, (error, result) => {
    done();
    if (error) {
      return res.status(400).json({ error });
    }
    if (result.rows === 1) {
      return res.status(404).send({
        status: 404,
        message: 'Entry not found',
      });
  } else {
  return res.status(200).send({
    status: 200,
      message: 'Entry Updated retrieved',
       entries: result.rows,
   });
    }
  });
});
};
// const updatedEntry = {
//     id: entryFound.id,
//     title: req.body.title || entryFound.title,
//     description: req.body.description || entryFound.description,
//   };

//   Models.splice(itemIndex, 1, updatedEntry);


//   return res.status(201).send({
//     status: '201',
//     message: 'Entry updated successfully',
//     updatedEntry,
//   });
// };

export default putEntry;
