import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/AllRoutes';
import route from './Routes/signinRouter';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.use('/', route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`We are live at 127.0.0.1: ${PORT}`); 
});

export default app;
