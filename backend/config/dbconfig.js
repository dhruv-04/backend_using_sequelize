const { Sequelize } = require('sequelize');
require('dotenv').config(); // Correct way to configure dotenv

const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;

const db = new Sequelize(database, 'root' , password, {
    host: host,
    dialect: 'mysql',
});

module.exports = db;