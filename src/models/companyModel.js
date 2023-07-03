module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      companyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "companies",
    }
  );

  Company.associate = (models) => {
    Company.hasMany(models.User, {
      foreignKey: {
        name: "companyId",
        allowNull: false,
      },
    });
  };

  return Company;
};
