
import { pool } from '../Database/db';

const deleteEntry = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const query = 'DELETE FROM entries WHERE id = $1 RETURNING *';
  const value = [id];
  const del = pool.query(query, value);
  if (del.rows < 1) {
      response.status(404).json({
          status: 404,
          message: 'Entry not found',
      });
  } else {
      response.status(200).json({
          status: 200,
          message: 'Entry deleted successfully',
          
      });
  }
};
  export default deleteEntry;

