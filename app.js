const express = require('express');
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const db = require('./config').DB.test;

const app = express();

mongoose.connect(db, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`connected to ${db}`);
	}
});

app.use('/api', apiRouter);


module.exports = app;