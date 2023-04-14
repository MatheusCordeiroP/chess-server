require('dotenv-safe').config({
  path: '.env',
  allowEmptyValues: true,
});

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  [environment]: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    logging: environment != 'test',
    pool: {
      max: 20,
      min: 4,
      acquire: 30000,
      idle: 10000,
    },
  },
};
