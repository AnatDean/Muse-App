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
                    
			Promise.all(
				[
					User.find({$and: [
						{Age : {$gte: currentAgeRange[0].min}},
						{Age : {$lte: currentAgeRange[0].max}}
					]}),
					current
				]
			)
				.then(([eligibleAges, current]) => {

					let currentGender = current.Gender;
					let currentPreference = current.GenderPreference;
					let currentAge = current.Age;

					return eligibleAges.filter(person => {
						if (current.Email === person.Email) return 0;
						if (currentAge < person.AgeRange[0] || currentAge > person.AgeRange[1]) return 0;
						if (!currentPreference.includes(person.Gender)) return 0;
						if (!person.GenderPreference.includes(currentGender)) return 0;
						else return 1;
					}).map(person => person.Email);
				});     
		});

}

function ratePeople (emails) {

	return Spotify.find()
		.then(eligibleSpotifys => { 
			let people = eligibleSpotifys.filter(person => {
				if (emails.includes(person.Email)) return 1;
				else return 0;
			});
            
			let currentEmail = getEmail();
                    
			Promise.all(
				[
					Spotify.findOne({Email: currentEmail}), people]
			)
				.then(([userObject, possibleMatches]) => {
            
					return possibleMatches.map(
						function(person) {
							return comparePeople(person, userObject);     
						}).sort((a,b) => {
						return b.rating - a.rating;});
				});
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