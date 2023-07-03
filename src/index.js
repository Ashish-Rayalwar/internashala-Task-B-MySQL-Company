const express = require("express");
const sequelize = require("./database/db");
const route = require("./routes/routes");
require("dotenv").config();
require("./database/db");
const multer = require("multer");
const app = express();
app.use(multer().any());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
