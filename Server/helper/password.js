
import bcrypt from 'bcrypt';

const hidePass = (password) => {
bcrypt.hashSync(password, number(process.env.hidepassword));
};
const showPass = (password, passwordHash) => {
   bcrypt.compareSync(password, passwordHash);
};
export default { hidePass, showPass };
