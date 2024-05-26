const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const jobskill = sequelize.define("jobskill", {
      
 skill_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
       model: 'skills', // 'users' refers to table name
       key: 'skill_id', // 'ERP' refers to column name in fathers table
    }
  },

    
 job_id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'jobs', // 'users' refers to table name
      key: 'job_id', // 'ERP' refers to column name in fathers table
   }
  },

     
     
    
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  }, );

  
    return jobskill;
  };
  