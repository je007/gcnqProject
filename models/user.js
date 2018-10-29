//We need to export a function that we can use to easily import
//our model later
module.exports = function(sequelize, DataTypes) {

  //Simple model with a couple fields
  const userModel = sequelize.define('user', {
    realName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    }
  });

  userModel.associate = db => {
      
  }

  return userModel;
}