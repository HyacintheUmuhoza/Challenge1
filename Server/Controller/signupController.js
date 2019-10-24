import dotenv from 'dotenv';
import MyDiary from '../Models/entriesModel';
import tokenValidation from '../helper/token';

dotenv.config();
class myDiary {
    static Diary() {
        return new MyDiary('users');
    }

    static async userRegister(req, res) {
        try {
            const userDiaries = await myDiary.Diary().select('*', 'email=$1', [req.body.email]);
            if (userDiaries.length) {
                return res.status(409).send({
                    status: 409,
                    message: 'Email exist',
                });
            }
            const title = 'firstname, lastname,email,password';
            const Values = `'${req.body.firstname}','${req.body.lastname}','${req.body.email}','${req.body.password}'`;
            const addUser = await myDiary.Diary().insert(title, Values);
            delete addUser[0].password;
            const token = tokenValidation(addUser[0].id);
            const data = {
                token,
                userdata: addUser[0],
            };
            return res.status(201).send({
                status: 201,
                message: 'user sign up successfully',
                data,
            });
        } catch (error) {
            console.log('error', error);
            return res.status(500).send({
                status: 500,
                err: 'An error',
            });
        }
    }

    static async userLogin(req, res) {
        try {
            const userDiary = await myDiary.Diary().select('*', 'email=$1', [req.body.email]);
            if (!userDiary.length) {
                return res.status(401).send({ status: 401, error: 'Encorrect user cridentials' });
            } else if (userDiary[0].password === req.body.password) {
                const token = tokenValidation(userDiary[0].id);
                const data = {
                    token,
                    userdata: userDiary[0],
                };
                return res.status(201).json({ status: 201, message: 'Login successfully', data });
            }
        } catch (error) {
            console.log('Errors', error);
            return res.status(500).send({
                status: 500,
                err: 'There is an error',
            });
        }
    }
}
export default { myDiary };
