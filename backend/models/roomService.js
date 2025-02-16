const db = require('../config/dbconfig');
const { DataTypes } = require('sequelize');

const RoomServiceModel = db.define('Room_service', {
    service_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    service_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    service_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: true,
});

module.exports = RoomServiceModel;