const { Company, User } = require("../database/db");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create({
      ...data,
    });
    return res
      .status(201)
      .json({ message: "User registration successfull", data: user });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await Company.findByPk(companyId);

    // ! Checking company exist with give companyId

    if (company === null) {
      return res.status(404).json({ message: "Company not found" });
    }

    // * Getting users with given companyId and company details
    const users = await User.findAll({
      where: {
        companyId: companyId,
      },
      include: {
        model: Company,
        attributes: ["companyId", "companyName"],
      },
    });

    // ! Checking users exist with give companyId
    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(201).json({ data: users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = { createUser, getUsers };
