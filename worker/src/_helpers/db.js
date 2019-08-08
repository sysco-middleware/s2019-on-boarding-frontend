const mongoose = require('mongoose');
const config = require('../config');


mongoose.connect(process.env.MONGO || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    Admin: require('../admin/admin.model'),
    Employe: require('../employe/employe.model')
}; 