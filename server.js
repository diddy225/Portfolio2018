const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// mongoose.connect('mongodb://localhost/portfoliocontact', { useNewUrlParser: true});
mongoose.connect('mongodb://user:pass123@ds043457.mlab.com:43457/heroku_n6gvl5tq', { useNewUrlParser: true});


//Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, function() {
  console.log(`App now listening on port ${PORT}`);
});
