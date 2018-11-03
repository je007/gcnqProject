module.exports = function(sequelize, DataTypes) {

    const postModel = sequelize.define('post', {
      post_title: DataTypes.STRING,
      post_ingredients: DataTypes.STRING,
      post_steps: DataTypes.STRING
<<<<<<< HEAD
=======
    }, {
      paranoid: true
>>>>>>> d50792a74514c74ee3480e0446aca76e2bc3d00d
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
