const { createCompany } = require("../controller/companyController");
const { createUser, getUsers } = require("../controller/userController");

const router = require("express").Router();

router.post("/users", createUser);
router.post("/company", createCompany);
router.get("/users/:companyId", getUsers);
module.exports = router;
