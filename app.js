const express = require('express');
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const db = process.env.NODE_ENV || 'development'
const url = require('./config').DB.test;

const app = express();

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