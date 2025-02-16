const db = require('../config/dbconfig');
const { Guests }= require('./guestModel');
const { DataTypes } = require('sequelize');

const RoomServiceUtilizedModel = db.define('Room_service_utilized', {
    guest_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Guests,
            key: 'guest_ID'
        },
        onDelete: 'CASCADE'
    },

    service_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    service_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: true,
});

module.exports = RoomServiceUtilizedModel;