const db = require('../config/dbconfig');
const { DataTypes } = require('sequelize');

const AdminModel = db.define('Admin', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, 
{
    freezeTableName: true,
    timestamps: true,
})

module.exports = AdminModel;