const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define("company", {
      
      company_ID: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
      },

      Title: {
        type: DataTypes.STRING, 
     },
      
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  },
   );


  
    return company;
  };
  