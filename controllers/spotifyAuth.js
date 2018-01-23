const {authApp, getToken, getTopArtistsAndTracks} = require('../models/spotify');

function authorise(req, res, next) {
	authApp(req, res, next);
}

function sendProfileData(req, res, next) {
	getToken(req, res, next)
		.then(tokens => getTopArtistsAndTracks(tokens, res))
		.then(data => res.send(data));
}


module.exports = {authorise, sendProfileData};