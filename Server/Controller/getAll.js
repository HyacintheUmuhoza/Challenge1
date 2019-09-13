import Models from '../Models/entriesModel';

const getAllEntries=(req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'View your entries list',
      entries: Models
    });
  };

  export default getAllEntries;