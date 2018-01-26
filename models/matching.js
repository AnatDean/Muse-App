const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB.test;
const {User, Spotify} = require('../database/models');
const {getEmail} = require('./spotify');


function getEligible (email) { 
	return User.findOne({Email: email})
		.then(user => {
			let current = user;
			let currentAgeRange = current.AgeRange;
			return Promise.all([User.find({$and: [{Age : {$gte: currentAgeRange[0].min}},{Age : {$lte: currentAgeRange[0].max}}]}),	current])   
		})
		.then(([eligibleAges, current]) => { 					      
			return eligibleAges.filter(person => {
				if (
					current.Email === person.Email ||
					current.Age < person.AgeRange[0] || current.Age > person.AgeRange[1] ||
					!current.GenderPreference.includes(person.Gender) ||
					!person.GenderPreference.includes(current.Gender)
				) return false;
				return true;
			}).map(person => person.Email);
		});  
}

function ratePeople (emails) {

	return Spotify.find()
		.then(eligibleSpotifys => { 
			let people = eligibleSpotifys.filter(person => {
				if (emails.includes(person.Email)) return 1;
				else return 0;
			});
      return Promise.all([getEmail(), people])
		})
		.then(([currentEmail, people]) => {
			return Promise.all([Spotify.findOne({Email: currentEmail}), people])
		})
		.then(([userObject, possibleMatches]) => {	
			return possibleMatches.map(
				function(person) {
					return comparePeople(person, userObject);     
				}).sort((a,b) => {
				return b.rating - a.rating;});
		});
}



function comparePeople (person, current) {

	let user = {
		email: person.Email,
		rating: 0
	};

	person.tracks.forEach((track) => {
		current.tracks.includes(track)  ? user.rating += 10 : null;
	});

	let currentArtists = current.artists.map(artist => artist[0]);
	person.artists.forEach((artist) => {
		currentArtists.includes(artist[0])?  user.rating += 4: null;
	});

	for (let key in current.genres) {
		if (person.genres.hasOwnProperty(key)) user.rating += person.genres[key]*2;
	}

	return user;
}

module.exports = {getEligible, ratePeople};