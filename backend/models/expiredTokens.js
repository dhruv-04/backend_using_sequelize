const db = require('../config/dbconfig');
const { DataTypes } = require('sequelize');

const ExpiredTokens = db.define('Expired_Tokens', {
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 

    logout_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, 
{
    freezeTableName: true,
    timestamps: false,
})

module.exports = ExpiredTokens;