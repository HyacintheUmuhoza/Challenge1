import Models from '../Models/entriesModel';
import validateEntry from '../validation/entryValidation';




const postEntry = (req, res) => {
  const { error } = validateEntry.validate(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
 
 const entry = {
   id: Models.length + 1,
   title: req.body.title,
   description: req.body.description,
 };
 Models.push(entry);
 return res.status(201).send({
   status: '2001',
   message: 'Entry added successfully',
   entry,
 });
};

export default postEntry;
