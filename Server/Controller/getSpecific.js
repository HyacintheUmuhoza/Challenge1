import Models from '../Models/entriesModel';

const getEntry=(req, res) => {
    const id = parseInt(req.params.id, 10);
    Models.map((entry) => {
      if (entry.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'entry retrieved  successfully',
          entry,
        });
      } 
  });
  //  return res.status(404).send({
  //    success: 'false',
  //    message: 'entry does not exist',
  //   });
  };

  export default getEntry;
