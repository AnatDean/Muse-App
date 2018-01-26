var querystring = require('querystring');
const client_id = require('../config').spotifyClient.id;
const client_secret = require('../config').spotifyClient.secret;
const fs = require('fs');
const request = require('request');
const path = require('path');
const {Token} = require('../database/models');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

function authApp(req, res, next) {
	const scope = 'user-read-private user-read-email user-top-read user-read-birthdate';
	const queries = querystring.stringify({
		response_type: 'code',
		client_id: client_id,
		scope: scope,
		redirect_uri: 'http://localhost:3000/api/authorised'
	});
	res.redirect('https://accounts.spotify.com/authorize?' + queries );
}

function getTokens() {
	return new Promise((resolve, reject) => {
		Token.findOne({name: 'user'})
			.then(data => {
				const tokens = {
					access_token: data.access_token,
					refresh_token: data.refresh_token
				};
				resolve(tokens);
		})
	})
}

function storeToken(req, res, next) {
	return new Promise((resolve, reject) => {
		const code = req.query.code || null;

		const authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code: code,
				redirect_uri: 'http://localhost:3000/api/authorised',
				grant_type: 'authorization_code'
			},
			headers: {
				'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
			},
			json: true
		};
  
		request.post(authOptions, function (error, res, body) {
			if (!error) {
				const tokens = {
					access_token: body.access_token,
					refresh_token: body.refresh_token
				};
				Token.findOneAndUpdate({name: 'user'}, {$set: {access_token: tokens.access_token, refresh_token: tokens.refresh_token}}, {upsert: true}, ((query) => {return query}) );
				resolve(tokens);
			} else {
				reject(error);
			}
		});
	})
		.catch('storeTokens', console.log);
}

function getTopArtistsAndTracks(tokens, res) {

	const topTrackOptions = {
		url: 'https://api.spotify.com/v1/me/top/tracks',
		json: true,
		headers: {
			'Authorization': 'Bearer ' + tokens.access_token
		}
	};

	const trackPromise = new Promise ((resolve, reject) => {

		request.get(topTrackOptions, function(error, response, body) {
			if (error) {
				reject(error);
			} else {
				resolve(body);
			}
		});
	});
  
	const topArtistOptions = {
		url: 'https://api.spotify.com/v1/me/top/artists',
		json: true,
		headers: {
			'Authorization': 'Bearer ' + tokens.access_token
		}
	};

	const artistPromise = new Promise ((resolve, reject) => {

		request.get(topArtistOptions, function(error, response, body) {
			if (error) {
				reject(error);
			} else {
				resolve(body);
			}
		});
	});
  
	return Promise.all([trackPromise, artistPromise])
		.then(([topTracks, topArtists]) => {
			const data = {
				topTracks: topTracks.items,
				topArtists: topArtists.items
			};
			return [tokens, data];
		});
}

function fetchSpotifyProfile(tokens) {

	const profileOptions = {
		url: 'https://api.spotify.com/v1/me/',
		json: true,
		headers: {
			'Authorization': 'Bearer ' + tokens.access_token
		}
	};

	return new Promise ((resolve, reject) => {
		request.get(profileOptions, function(error, response, body) {


			if (error) {
				reject(error);
			} else {
				resolve([tokens, body]);
			}
		});
	});
}

function getEmail (req) {
	return req.params.email;
}

module.exports = {authApp, storeToken, getTopArtistsAndTracks, fetchSpotifyProfile, getEmail, getTokens};