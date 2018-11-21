const db = require('../models');
const RestfulAPI = require('./route-class');

module.exports = function (app) {
const contact = new RestfulAPI('/', app, db.Contact)
contact.create();
};