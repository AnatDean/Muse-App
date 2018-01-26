const express = require('express');
const bodyparser = require('body-parser');
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const db = process.env.NODE_ENV || 'development'
const url = require('./config').DB.test;
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

mongoose.connect(url, {autoIndex: false}, (err) => {
	console.log(url)
	if (err) {
		console.log('app.js', err);
	} else {
		console.log(`connected to ${db}`);
	}
});

app.use('/api', apiRouter);

module.exports = app;