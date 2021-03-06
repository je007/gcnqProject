const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:foodfeedpw@foodfeed.cbkxshe4wwnq.us-east-2.rds.amazonaws.com/gcnq');

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
