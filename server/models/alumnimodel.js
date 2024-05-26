module.exports = (sequelize, DataTypes) => {
    const alumni = sequelize.define("alumni", {
      ERP: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
       
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      Password: {
        type: DataTypes.STRING,
        allowNull :false,

      },
      ProgramId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
           model: 'programs', // 'users' refers to table name
           key: 'programid', // 'ERP' refers to column name in fathers table
        }
     },
     
     
      Batch: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        Mentor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
        Companyid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'companys', // 'users' refers to table name
              key: 'company_ID', // 'ERP' refers to column name in fathers table
           }
        },
       
      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
  updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
  
    }, );

    
    alumni.associate = (models) => {
      // ... (your existing associations)
      alumni.associate = (models) => {
        alumni.hasMany(models.fundraising, {
          onDelete : "cascade",});
        };
      alumni.belongsTo(models.company, {
        foreignKey: 'Companyid',
        as: 'company', // Alias for the association
      });
    };
  
 
    
    
    return alumni;
  };
  
  