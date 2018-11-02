//We need to export a function that we can use to easily import
//our model later
module.exports = function(sequelize, DataTypes) {

    //Simple model with a couple fields
    const postModel = sequelize.define('post', {
      post_title: DataTypes.STRING,
      post_text: DataTypes.STRING,
      post_steps: DataTypes.STRING
    });
    
    postModel.associate = db => {
      postModel.belongsTo(db.User, {
        alias: 'author',
        as: 'author',
        foreignKey: 'user_id',
        otherKey: 'id'
      });
   //associations 
   //    User.belongsTo(Post)
    }

    return postModel;
  }
 