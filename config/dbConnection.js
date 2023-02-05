const mssql = require('mssql');
const dotenv = require('dotenv');
const config = require('./configuration.json');
dotenv.config();

const sqlConfig = {
    user: config.db_connection.DB_USER,// process.env.DB_USER,
    password: config.db_connection.DB_PASSWORD,// process.env.DB_PASSWORD,
    database: config.db_connection.DB_NAME,// process.env.DB_NAME,
    server: config.db_connection.DB_HOST_NAME,//process.env.DB_HOST_NAME,
    port: 1450,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const pool1 = new mssql.ConnectionPool(sqlConfig);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    console.log('Database error: /n', err);
})

pool1Connect.catch((err) => {
    console.log(err);
})


module.exports = { pool1Connect, pool1 };