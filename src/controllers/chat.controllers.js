const ChatServices = require('../services/chat.services');


const getChatUser = async (req, res) => {
    try {
        const { id } = req.params;
        const chatUser = await ChatServices.getUserChat(id);
        res.json(chatUser);
    } catch (error) {
        res.status(400).json(error)
    }
}


const getAllChat = async (req, res) => {
    try {
        const { chatId } = req.params;
        const entryAndMesage = await ChatServices.getAll(chatId);
        res.json(entryAndMesage);
    } catch (error) {
        res.status(400).json(error);
    }
}

// * CHAT DUO
const createChat = async (req, res) => {
    try {
        const newChat = req.body;
        const { userId, participantsId } = req.body;
        const result = await ChatServices.create( newChat ,userId, participantsId );
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

// * CHAT GROUP
const groupChat = async (req, res) => {
    try {
        const newChat = req.body;
        const { participantsId } = req.body;
        const result = await ChatServices.createGroup( newChat ,participantsId);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

const deleteChat = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ChatServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createChat,
    groupChat,
    deleteChat,
    getChatUser,
    getAllChat,
}