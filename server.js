const express = require('express');
const db = require('./models');
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const postRoutes = require('./routes/post');

app.use('/', postRoutes);

//This will sync the model structure with the database
//Be careful, the force:true will destory the tables and recreate them
//This is useful for testing but not something you want in production
db.sequelize.sync({force: true}).then(() => {
  
  // Create a test user
  db.User.create({
    realName: 'Dr. Mr. Richard Key III Esq.',
    username: 'Busyrich'
  }).then(() => {
    //After the user is created,
    //get all the users and log the data returned
    
  });

  db.Post.create({
    Post: 'Test post data',
    PostUser: 'Busyrich'
  }).then(() => {
    //After the user is created,
    //get all the users and log the data returned
    
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));