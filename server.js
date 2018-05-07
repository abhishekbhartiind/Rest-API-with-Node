const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	http = require('http'),
	app = express(), 
	mongoose = require('mongoose'),
	cors =  require('cors');

const url = 'mongodb://localhost:27017/testAnglr';
const customerRoutes = require('./routes/customer');

mongoose.Promise = global.Promise;
mongoose.connect(url);
app.use(cors());

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now.');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/customer', customerRoutes);

app.listen(5000, () => console.log('test server running on port 5000!'))