module.exports = function(sequelize, DataTypes) {

    const postModel = sequelize.define('post', {
      post_title: DataTypes.STRING,
      post_ingredients: DataTypes.STRING,
      post_steps: DataTypes.STRING
    }, {
      paranoid: true
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
