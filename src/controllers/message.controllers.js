const MessageServices = require("../services/message.services");


const createMessage = async (req, res) => {
    try {
        const newMessage = req.body;
        const result = await MessageServices.create(newMessage);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

module.exports = {
    createMessage,
}