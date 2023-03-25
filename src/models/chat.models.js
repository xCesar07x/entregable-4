const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Chats = db.define('chats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    isTeam: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{
    timestamps: true,
    createdAt: false,
})

module.exports = Chats;