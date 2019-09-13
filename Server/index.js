import express from 'express';
import router from './Routes/AllRoutes';

import bodyParser from 'body-parser';


// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);





 const PORT = 2000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
