const db = require('../config/dbconfig');
const { DataTypes } = require('sequelize');

const RoomAvailable = db.define('Room_available', {
    room_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    room_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    rooom_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    room_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: true,
});

module.exports = RoomAvailable;