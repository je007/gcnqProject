module.exports = function(sequelize, DataTypes) {

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
