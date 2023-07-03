const { Company } = require("../database/db");

const createCompany = async (req, res) => {
  try {
    const data = req.body;

    const company = await Company.create({
      ...data,
    });

    return res
      .status(201)
      .json({ message: "Company registration successfull", data: company });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createCompany };
