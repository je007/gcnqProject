const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

const postRoutes = require('./routes/post');

app.use('/', postRoutes);

//This will sync the model structure with the database
//Be careful, the force:true will destory the tables and recreate them
//This is useful for testing but not something you want in production
db.sequelize.sync({force: true}).then(() => {
  
  // Create a test user
  db.User.create({
    realName: 'The Elustrious Dr. Mr. Richard Key III Esq.',
    username: 'Busyrich'
  }).then(() => {
    db.Post.create({
      post_title: 'Super Mega Tasty Awesome Recipete Title #1',
      post_text: 'Test post data',
      user_id: 1
    }).then(() => {
      console.log('Test Data Added.');
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));