// import all folder from Controller
import express from 'express';
import AddEntry from '../Controller/AddEntry';
import DeleteEntry from '../Controller/DeleteEntry';
import getAll from '../Controller/getAll';
import getSpecific from '../Controller/getSpecific';
import updateEntry from '../Controller/updateEntry';

const router = express.Router();




router.get('/api/v1/entries', getAll);
router.get('/api/v1/entries/:id', getSpecific);
router.delete('/api/v1/entries/:id', DeleteEntry);
router.post('/api/v1/entries', AddEntry);
router.put('/api/v1/entries/:id', updateEntry);


export default router;
