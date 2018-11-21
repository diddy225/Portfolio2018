const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// mongoose.connect('mongodb://localhost/portfoliocontact', { useNewUrlParser: true});
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true});


//Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, function() {
  console.log(`App now listening on port ${PORT}`);
});
