module.exports = (sequelize, DataTypes) => {
    const jobs = sequelize.define("jobs", {
      Job_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
       
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AlumniERP: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'alumnis', // 'users' refers to table name
            key: 'ERP', // 'ERP' refers to column name in fathers table
       },
       
      },
      
      Company_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'companys', // 'users' refers to table name
            key: 'company_ID', // 'ERP' refers to column name in fathers table
       },
        
    },



     

      Timing: {
        type: DataTypes.STRING,
        allowNull :false,
      },

      ApplicationDeadline: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      
      Link: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Internship: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      remote_onsite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        


      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
  updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
  
    }, );
  
return jobs; 
  };
  