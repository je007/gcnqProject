const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

if(process.env.NODE_ENV = "production") {
  app.use(express.static('client/build'));
}

const postRoutes = require('./routes/post');

app.use('/', postRoutes);

app.use('*', (req, res) => res.sendFile('client/build/index.html'));

//This will sync the model structure with the database
//Be careful, the force:true will destory the tables and recreate them
//This is useful for testing but not something you want in production
db.sequelize.sync({alter:true}).then(() => {

//   db.User.create({
//     realName: 'The Elustrious Dr. Mr. Richard Key III Esq.',
//     username: 'Busyrich'
//   }).then(() => {
//     db.Post.create({
//       post_title: 'Super Mega Tasty Awesome Recipe Title',
//       post_ingredients: 'Test post data',
//       post_steps: 'Make the thing',
//       user_id: 1
//     }).then(() => {
//       console.log('Test Data Added.');
//     });
//   });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
