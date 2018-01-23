const {authApp, getToken, getSpotifyData} = require('../models/spotify');

function authorise(req, res, next) {
	authApp(req, res, next);
}

function sendProfileData(req, res, next) {
	getToken(req, res, next)
		.then(tokens => getSpotifyData(tokens, res))
		.then(data => res.send(data));
}


module.exports = {authorise, sendProfileData};