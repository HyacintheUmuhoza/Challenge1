/* eslint-disable consistent-return */
import Models from '../Models/entriesModel';


const deleteEntry = (req, res) => {
    const id = parseInt(req.params.id, 10);
    let entryIndex;
   const entry = Models.find((item, index) => {
     entryIndex = index;
     return item.id === id;
   });

   if (entry === null || entry === undefined) {
    return res.status(404).send({
      status: 404,
      message: 'entry not found',
    });
   } else {
    Models.splice(entryIndex, 1);
    return res.status(200).send({
      status: '200',
      message: 'Entry deleted successfuly',
    });
   }      
};
  
  export default deleteEntry;
