/* const { Sequelize } = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
let sequelize;

const startSequelize = (dbName, dbHost, dbPort, dbUser, dbPass) => {
  return new Sequelize(
    `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
};

try {
  sequelize = startSequelize(DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS);
  sequelize.authenticate().then((value) => {
    console.log(value);
  });
  console.log('Connection to DB SUCCESSFUL');
} catch (error) {
  console.error('Connection to DB FAILED');
}

const connection = mysql.createConnection(
  {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
  'single'
);

module.exports = connection; */
