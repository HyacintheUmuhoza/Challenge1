import Models from '../Models/entriesModel';



const postEntry = (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const entry = {
   id: Models.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 Models.push(entry);
 return res.status(201).send({
   success: 'true',
   message: 'Entry added successfully',
   entry
 })
};

export default postEntry;
