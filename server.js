const express = require('express');
const mongoose = require('mongoose');


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//MongoDB
mongoose.connect('mongodb://localhost/portfoliocontact', { useNewUrlParser: true});
// mongoose.connect('mongodb://user:pass12@ds041377.mlab.com:41377/heroku_wzvb04pg', { useNewUrlParser: true});


//Routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, function() {
  console.log(`App now listening on port ${PORT}`);
});
