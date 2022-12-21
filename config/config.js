require('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST, DB_DIALECT, DB_NAME} = process.env;

module.export = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "host": DB_HOST,
    "database": DB_NAME,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "host": DB_HOST,
    "database": DB_NAME,
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "host": DB_HOST,
    "database": DB_NAME,
    "dialect": DB_DIALECT
  }
}
