const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//MongoDB
// mongoose.connect('mongodb://localhost/portfoliocontact', { useNewUrlParser: true});
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds043457.mlab.com:43457/heroku_n6gvl5tq`, { useNewUrlParser: true});


//Routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, function() {
  console.log(`App now listening on port ${PORT}`);
});