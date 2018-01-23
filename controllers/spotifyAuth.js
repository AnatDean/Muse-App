const { authApp, getToken, getTopArtistsAndTracks, fetchSpotifyProfile } = require('../models/spotify');
const { formatTrack, formatArtists, formatGenres } = require('../models/formatting');
const moment = require('moment');
const {preciseDiff} = require('moment-precise-range-plugin');

function authorise(req, res, next) {
	authApp(req, res, next);
}

function sendProfileData(req, res, next) {
	getToken(req, res, next)
		.then(tokens => getTopArtistsAndTracks(tokens, res))
		.then(([tokens, data]) => Promise.all([data, fetchSpotifyProfile(tokens)]))
		.then(([data, [tokens, body]]) => {
			let age = moment.preciseDiff(`${body.birthdate} 20:15:00`, moment(), true);
			let spotifyData = { Email: body.email, tracks: formatTrack(data.topTracks), artists: formatArtists(data.topArtists), genres: formatGenres(data.topArtists) }
			let userData = { Name: body.display_name, Age: age.years, Email: body.email, picture: body.images[0].url}
			res.send([spotifyData, userData]);
		})
}




module.exports = { authorise, sendProfileData };