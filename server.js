const express = require('express');
const db = require('./models');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    db.User.findAll().then(users => {
        res.json(users); //We only added one so we log index 0
      });
});


//This will sync the model structure with the database
//Be careful, the force:true will destory the tables and recreate them
//This is useful for testing but not something you want in production
db.sequelize.sync({force: true}).then(() => {
  
  // Create a test user
  db.User.create({
    realName: 'Dr. Mr. Richard Key III Esq.',
    username: 'Busyrich'
  }).then(() => {
    db.Post.create({
      post_text: 'Test post data',
      user_id: 1
    }).then(() => {
      db.Post.findAll({
        include: ['author']
      }).then((posts) => {
        console.log(posts[0].get());
      });
    });
  });


});

app.listen(port, () => console.log(`Listening on port ${port}`));