const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const skill = sequelize.define("skill", {
      
      skillid: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
      },
      
      title: {
        type: DataTypes.STRING,
        allowNull: false,

      },
    
    
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  }, );
  

    return skill;
  };
  