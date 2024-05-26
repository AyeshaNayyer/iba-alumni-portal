const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const fyp = sequelize.define("fyp", {
      
      fypid: {
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
    
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  }, );
  

    
  
    return fyp;
  };
  