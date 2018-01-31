const express = require('express');
const bodyparser = require('body-parser');
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const db = process.env.NODE_ENV || 'development';
const url = require('./config').DB[db];
const cors = require('cors');
const morgan = require('morgan')('dev');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(morgan);

mongoose.connect(url, {autoIndex: false}, (err) => {
	if (err) {
		console.log('app.js', err);
	} else {
		console.log(`connected to ${db}`);
	}
});

app.use('/api', apiRouter);

module.exports = app;