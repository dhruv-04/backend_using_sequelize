const db = require('../config/dbconfig');
const { DataTypes } = require('sequelize');
const Guests = require('./guestModel');

const Complaint = db.define('Complaint', {
    guest_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Guests,
            key: 'guest_ID',
        },
        onDelete: 'CASCADE',
    },

    complaint: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: true,
});

module.exports = Complaint;