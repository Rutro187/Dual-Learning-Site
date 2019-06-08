const express = require('express');
const app = express();
const PORT = 3000;
const quizRoutes = require('./routes/quiz.routes');
const userRoutes = require('./routes/user.routes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Activate this later for production
// app.use(express.static(__dirname+'/dist'))

app.use('/quizzes', quizRoutes);

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}`);
  });

module.exports = app;