const Sequelize = require('sequelize');

//You will need to create a database, Sequelize won't create it for us
//Your user/pass might differ as well
//user:pass@example.com/dbname
const sequelize = new Sequelize('mysql://root:CaliLife@localhost/gcnq');

//Try to conenct and console if it worked or not
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Define what models we want to load
var models = [
  'User'
];

//Loop over the model name list and load in each model
//We put them on module.exports so they can be imported easily
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model.toLowerCase());
});

// export connection
module.exports.sequelize = sequelize;