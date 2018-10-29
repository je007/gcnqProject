//We need to export a function that we can use to easily import
//our model later
module.exports = function(sequelize, DataTypes) {

    //Simple model with a couple fields
    const postModel = sequelize.define('post', {
      post_id: {
        type: DataTypes.STRING,
      },
        posttext: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.STRING
      }
    });
    postModel.associate = db => {
      postModel.hasMany(db.User, {
        alias: 'alias',
        as: 'key',
        foreignKey: 'user_id'});
   //associations go here :-)
    }

    return postModel;
  }
 