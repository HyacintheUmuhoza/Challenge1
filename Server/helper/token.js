import jwt from 'jsonwebtoken';

const tokenValidation = (id) => {
   const found = jwt.sign({
       Id: id,
   },
    process.env.secretkey);
   return found;
};
export default tokenValidation;
