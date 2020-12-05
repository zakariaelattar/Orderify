require('dotenv').config();
module.exports = {
  host: process.env.HOST,
  DB: process.env.DB,
  USER: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
