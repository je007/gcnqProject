const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:Root60611@localhost/gcnq');

<<<<<<< HEAD
//You will need to create a database, Sequelize won't create it for us
//Your user/pass might differ as well
//user:pass@example.com/dbname
const sequelize = new Sequelize('mysql://root:CaliLife@localhost/gcnq');

//Try to conenct and console if it worked or not
=======
>>>>>>> d50792a74514c74ee3480e0446aca76e2bc3d00d
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var models = [
  'User',
  'Post'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model.toLowerCase());
});

models.forEach(function(model) {
  module.exports[model].associate(module.exports);
});

module.exports.sequelize = sequelize;
