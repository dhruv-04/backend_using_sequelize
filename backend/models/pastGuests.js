const { DataTypes } = require('sequelize');
const db = require('../config/dbconfig');

const PastGuests = db.define('PastGuests', {
    guest_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }, 

    hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    freezeTableName: true,
    timestamps: true,
});

module.exports = PastGuests;