const Users = require("../models/user.models");


class AuthServices {
    static async getUser(email) {
        try {
            const user = await Users.findOne({
                where: { email },
            })
            return user;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = AuthServices;