const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const fundraising = sequelize.define("fundraising", {
      fundraisingid: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
       
      },
      ERP: {
        type: DataTypes.INTEGER,
        references: {
           model: 'users', // 'users' refers to table name
           key: 'ERP', // 'ERP' refers to column name in fathers table
        }
     },
      title: {
        type: DataTypes.STRING,
      },
     
      description: {
        type: DataTypes.STRING,
      },
      target: {
        type: DataTypes.INTEGER,
        
      },
      current_amount: {
        type: DataTypes.INTEGER,
      },
     
    });

  
    return fundraising;
  };
  