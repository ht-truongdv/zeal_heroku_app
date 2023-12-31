require('dotenv').config();
module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USERNAME || "postgres",
  PASSWORD: process.env.DB_PASSWORD || "Nhatnam@123",
  DB: process.env.DB_NAME || "Nodejs_CRUD",
  dialect: "postgres",
  dialectOptions: process.env.STATUS == 'develop' ? {} : {
    ssl: {
      require: false,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
