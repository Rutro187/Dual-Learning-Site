const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000
const firebase = require('firebase');
  require('firebase/auth');
  require('firebase/database');
const quizRoutes = require('./server/routes/quiz.routes');
const userRoutes = require('./server/routes/user.routes');
const bodyParser = require("body-parser");
var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(config); 

app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/quizApp"));

app.use('/quizzes', quizRoutes);

app.use('/users', userRoutes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/quizApp/index.html');
});

app.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}`);
  });
  

module.exports = app;