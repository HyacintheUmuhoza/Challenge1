import Models from '../Models/entriesModel';


const deleteEntry= (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    Models.map((entry, index) => {
      if (entry.id === id) {
         Models.splice(index, 1);
         return res.status(200).send({
           success: 'true',
           message: 'Entry deleted successfuly'
         });
      }
    });
  
 
      // return res.status(404).send({
      //   success: 'false',
      //   message: 'entry not found'
      // });
  
    
  };
  
  export default deleteEntry;