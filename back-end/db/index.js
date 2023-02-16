//const config = require('../config/dev');
const mongoose = require('mongoose');

require('./models/blog');
require('./models/view');

exports.connect = () => {
    return mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }, (err) => {
            if(err) {console.error(err);}
            else {
                console.log('Connected to DB!');
            }
        });
}