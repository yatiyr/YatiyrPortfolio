require('dotenv').config();

//const config = require('../config/dev');
const mongoose = require('mongoose');
const fakeDB = require('./FakeDB');

mongoose.connect("mongodb+srv://test:testtest@cluster0.trrn4.mongodb.net/portfolioDb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log('> Starting populating DB...');
        await fakeDB.populate();
        await mongoose.connection.close();
        console.log('> DB has been populated...');
    }
})