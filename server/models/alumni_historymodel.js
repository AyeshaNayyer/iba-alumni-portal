module.exports = (sequelize, DataTypes) => {
    const alumnihistory = sequelize.define("alumnihistory", {
      Alumnihistoryid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
      },
        AlumniERP: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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
       
          
      City: {
        type: DataTypes.STRING,
        allowNull: false,
      },

     Country: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },

      Region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      

      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
  updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
  
    }, );
  
return alumnihistory; 
  };
  