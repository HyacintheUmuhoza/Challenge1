import Models from '../Models/entriesModel';


const putEntry = (req, res) => {
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
        success: 'false',
        message: 'entry not found'
      });
    }
  
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
  
    const updatedEntry = {
      id: entryFound.id,
      title: req.body.title || entryFound.title,
      description: req.body.description || entryFound.description
    };
  
    Models.splice(itemIndex, 1, updatedEntry);
    
  
    return res.status(201).send({
   success: 'true',
    message: 'Entry updated successfully',
      updatedEntry
    });
   };

   export default putEntry;
  
  