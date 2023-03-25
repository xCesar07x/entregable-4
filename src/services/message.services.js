const Messages = require("../models/message.models");

class MessageServices {
    static async create(newMessage) {
        try {
            const messageCreated = await Messages.create(newMessage);
            return messageCreated;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessageServices;