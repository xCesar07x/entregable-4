const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Participants = db.define('participants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false,
})

module.exports = Participants;