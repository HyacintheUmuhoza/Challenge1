import Models from '../Models/entriesModel';
import validateEntry from '../validation/entryValidation';


const putEntry = (req, res) => {
const { error } = validateEntry.validate(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
const id = parseInt(req.params.id, 10);
  let entryFound;
  let itemIndex;
  Models.map((entry, index) => {
    if (entry.id === id) {
      entryFound = entry;
      itemIndex = index;
    }
  });

  if (!entryFound) {
    return res.status(404).send({
      status: '404',
      message: 'entry not found',
    });
  }
const updatedEntry = {
    id: entryFound.id,
    title: req.body.title || entryFound.title,
    description: req.body.description || entryFound.description,
  };

  Models.splice(itemIndex, 1, updatedEntry);


  return res.status(201).send({
    status: '201',
    message: 'Entry updated successfully',
    updatedEntry,
  });
};

export default putEntry;
