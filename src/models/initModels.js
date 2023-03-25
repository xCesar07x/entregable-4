const Users = require('./user.models');
const Chats = require('./chat.models');
const Messages = require('./message.models');
const Participants = require('./participants.models');

const initModels = () => {

    // * USERS - CHATS
     Users.hasMany(Chats, { foreignKey: 'chatsId' });
     Chats.belongsTo(Users, { foreignKey: 'chastsId' });

    // * USERS - MESSAGES
     Users.hasMany(Messages, { foreignKey: 'messagesId' });
     Messages.belongsTo(Users, { foreignKey: 'messagesId' });

    // * CHATS - MESSAGES
     Chats.hasMany(Messages, { foreignKey: 'messagesId' });
     Messages.belongsTo(Chats, { foreignKey: 'messagesId' });

    // * USERS - PARTICIPANTS
     Users.hasMany(Participants, { foreignKey: 'participantsId' });
     Participants.belongsTo(Users, { foreignKey: 'participantsId' });

    // * CHATS - PARTICIPANTS
     Chats.hasMany(Participants, { foreignKey: 'participantsId' });
     Participants.belongsTo(Chats, { foreignKey: 'participantsId' });

}

module.exports = initModels;