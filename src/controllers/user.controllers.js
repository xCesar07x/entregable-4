const UserServices = require("../services/user.services");

const getAllUsers = async (req, res) => {
    try {
        const allUser = await UserServices.getAll();
        res.json(allUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

module.exports = {
    createUser,
    getAllUsers,
}