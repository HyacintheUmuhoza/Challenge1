import express from 'express';
import entry from '../Controller/signupController';


const app = express.Router();
app.post('/signup', entry.myDiary.userRegister);
app.post('/signin', entry.myDiary.userLogin);


export default app;
