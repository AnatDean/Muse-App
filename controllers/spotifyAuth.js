const {authApp, getToken, getTopArtistsAndTracks, fetchSpotifyProfile} = require('../models/spotify');
const {formatTrack, formatArtists, formatGenres} = require('../models/formatting');

function authorise(req, res, next) {
	authApp(req, res, next);
}

function sendProfileData(req, res, next) {
	getToken(req, res, next)
		.then(tokens => getTopArtistsAndTracks(tokens, res))
		.then(([tokens, data]) => {


			data.topTracks = formatTrack(data.topTracks);
			data.genres = formatGenres(data.topArtists);
			data.topArtists = formatArtists(data.topArtists);

			// res.send([formattedTrack, formattedArtists, formattedGenres]);
			return Promise.all([data, fetchSpotifyProfile(tokens)]);
      
		})
		.then(([data, [tokens, body]]) => res.send([data, [tokens, body]]));
}




module.exports = {authorise, sendProfileData};