const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//comment box
let ContactSchema = new Schema({

    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    comment: {
      type: String,
      required: true
    }
});

let Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;