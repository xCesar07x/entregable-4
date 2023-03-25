const Users = require("../models/user.models");


class UserServices {

    // static async getUser(email) {
    //     try {
    //         const user = await Users.findOne({
    //             where: { email },
    //         })
    //         return user;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    static async getAll(){
        try {
            const users = await Users.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;