const express = require('express');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// mongoose.connect('mongodb://localhost/portfoliocontact', { useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});


//Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, function() {
  console.log(`App now listening on port ${PORT}`);
});
