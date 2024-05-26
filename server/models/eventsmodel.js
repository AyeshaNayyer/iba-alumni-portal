const User = require('./usersmodel');
module.exports = (sequelize, DataTypes) => {
    const events = sequelize.define("events", {

      eventid: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement :true,
     },
     
      title: {
        type: DataTypes.STRING,
      },
     
      description: {
        type: DataTypes.STRING,

      },
      location: {
        type: DataTypes.STRING,
        
      },
      date: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.STRING,
      },
      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }

  }, );

  

  
    return events;
  };
  