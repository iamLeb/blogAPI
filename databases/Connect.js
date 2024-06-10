require('dotenv').config();
const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URL)
    .then(res => console.log('** Connected to Database **'))
    .catch(err => console.log('error connecting to database ' + err));

module.exports = connect;