const AuthServices = require('../services/auth.services');
const bcrypt = require('bcrypt');

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await AuthServices.getUser(email);
        if(!user) {
            return next({
                status: 400,
                message: 'Invalid email',
                error: 'User not found'
            });
        }
        const isValid = await bcrypt.compare(JSON.stringify(password), JSON.stringify(user.password));
         if(!isValid) {
            return next({
                status: 400,
                message: 'The password not found',
                error: 'Invalid password'
            });
         }
         res.json({
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
         });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    userLogin,
}