const { Sequelize, DataTypes } = require("sequelize");

// * Database connection with mysql

const sequelize = new Sequelize("companyschema", "root", "password12345", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("db connected successfully");
} catch (error) {
  console.log(error.message, "error while connecting to database");
}

const User = require("../models/userModel")(sequelize, DataTypes);
const Company = require("../models/companyModel")(sequelize, DataTypes);

User.associate({ Company });
sequelize.sync({ force: false });
// sequelize.sync({ force: true });

module.exports = { sequelize, User, Company };
