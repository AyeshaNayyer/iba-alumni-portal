module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    ERP: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
     
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    UserType: {
      type: DataTypes.ENUM("alumni", "student"),
    },
    Password: {
      type: DataTypes.STRING,
      allowNull :false,
    },
    ProgramId: {
      type: DataTypes.INTEGER,
      
    },
    Batch: {
      type: DataTypes.INTEGER,
    },
    Phone: {
      type: DataTypes.STRING,
    },
    LinkedIn: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  }, );

users.associate = (models) => {
  users.hasMany(models.fyp, {
    onDelete : "cascade",});
  };
  return users;
};
