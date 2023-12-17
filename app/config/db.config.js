module.exports = {
  HOST: "ec2-3-210-173-88.compute-1.amazonaws.com",
  USER: "nmkkjfiatgtleo",
  PASSWORD: "bf37917f43b6223f3eb3aa5f9be073111002e275ac82d9ca9dd27745275e0047",
  DB: "dbdh7imkv4p87t",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
