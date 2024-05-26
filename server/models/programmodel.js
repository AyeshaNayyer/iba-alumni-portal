const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const program = sequelize.define("program", {
      programid: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
       
      },
      name: {
        type: DataTypes.STRING,
      },
      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
     
    });
   
    return program;
  };
  