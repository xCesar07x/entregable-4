const Chats = require("../models/chat.models");
const Messages = require("../models/message.models");
const Participants = require("../models/participants.models");
const Users = require("../models/user.models");

class ChatServices {

    static async getUserChat(id) {
        try {
            const result = await Chats.findByPk(id, {
                attributes: { exclude: ['chatsId', 'chastsId'] },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(chatId) {
         try {
            const result = await Chats.findByPk(chatId, {
                attributes: { exclude: ['chatsId', 'chastsId'] },
                include: [
                    {
                        model: Participants,
                        
                    },
                    {
                        model: Messages,
                        attributes: { exclude: ['messagesId'] }
                    } 
                ]
            })
            return result;
         } catch (error) {
            throw error;
         }
    }

    // * CHAT DUO
    static async create(newChat ,userId, participantsId) {
        try {
            const chat = await Chats.create(newChat);
            await Participants.create({
                userId: userId,
                chatId: chat.id,
            });
            await Participants.create({
                userId: participantsId,
                chatId: chat.id,
            })
            
        } catch (error) {
            throw error;
        }
    }

    // * CHAT GROUP
    static async createGroup(newChat,participantsId) {
        try {
            const chat = await Chats.create(newChat);
            await Participants.bulkCreate([
                participantsId,
            ]);
            await Participants.create({
                chatId: chat.id,
            })
            // await Participants.bulkCreate([
            //     {
            //         participantsId: participantsId,
            //         chatId: chat.id,
            //     }  
            // ]);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Chats.destroy({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ChatServices;