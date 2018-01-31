const mongoose = require('mongoose');
mongoose.Promise = Promise;
const DB = require('../config').DB.test;
const {User, Spotify} = require('../database/models');
const {getEmail} = require('./spotify');
const intersection = require('lodash/intersection');


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
					!person.GenderPreference.includes(current.Gender) ||
					current.Rejected.includes(person.Email) ||
					person.Rejected.includes(current.Email)
				) return false;
				return true;
			}).map(person => person.Email);
		});  
}

function ratePeople (req, emails) {
	return Spotify.find()
		.then(eligibleSpotifys => { 
			let people = eligibleSpotifys.filter(person => {
				if (emails.includes(person.Email)) return 1;
				else return 0;
			});
			const currentEmail = getEmail(req);
			return Promise.all([Spotify.findOne({Email: currentEmail}), people])
		})
		.then(([userObject, possibleMatches]) => {
			return Promise.all(possibleMatches.map(
				function(person) {
					return comparePeople(person, userObject);     
				}));
		})
		.then(matches => {
			console.log(matches)
			return matches.sort((a,b) => {
				return b.rating - a.rating;});
		});
}

function addChoice (currentEmail, personEmail, choice) {
	if (choice === 'rejection') {
		return User.findOneAndUpdate({Email: { $eq: currentEmail }}, {$addToSet: {Rejected: personEmail}}, {returnNewDocument: true} )
		.then(user => user);
	} else {
		return User.findOneAndUpdate({Email: { $eq: currentEmail }}, {$addToSet: {Matched: personEmail}}, {returnNewDocument: true} )
		.then(user => user);
	}
}


function comparePeople (person, current) {

	return User.findOne({Email: person.Email}).lean()
		.then(userProfile => {
			
			userProfile.rating = 0;
			userProfile.matchingOn = {
				tracks: [],
				artists: [],
				genres: []
			};
		
			person.tracks.forEach((track) => {
				if (current.tracks.includes(track)) {
					userProfile.rating += 10;
					userProfile.matchingOn.tracks.push(track);
				} 
			});
		
			let currentArtists = current.artists.map(artist => artist[0]);
			person.artists.forEach((artist) => {
				if (currentArtists.includes(artist[0])) {
					userProfile.rating += 4;
					userProfile.matchingOn.artists.push(artist[0]);
				}
			});
		
			for (let key in current.genres) {
				if (person.genres.hasOwnProperty(key)) {
						userProfile.rating += person.genres[key] * 2;
						userProfile.matchingOn.genres.push(key);
					}
				}

			return userProfile;
		})
}

function getIncomingMatches(currentEmail) {
	return User.findOne({Email: currentEmail}, {Matched: true})
		.then(profile => {
			return profile.Matched;
		})
		.then(liked => {
			return Promise.all([User.find({Matched: {$in: [currentEmail]}}), liked]);
		})
		.then(([likedYou, liked]) => {
			const likedYouEmails = likedYou.map(user => user.Email);
			const mutual = intersection(likedYouEmails, liked);
			likedYou = likedYou.filter(user => !mutual.includes(user.Email));
			liked = liked.filter(user => !mutual.includes(user));
			return Promise.all([
				Promise.all(liked.map(user => User.find({Email: user}))), 
				Promise.all(likedYou.map(user => User.find({Email:user.Email}))),
				Promise.all(mutual.map(user => User.find({Email: user})))
				]);
		})
		.then(([liked, likedYou, mutual]) => {
			// console.log(liked, likedYou, mutual)
			return [liked, likedYou, mutual]
		// 	return Promise.all([
		// 		Promise.all(liked.map(user => Spotify.find({Email: user[0].Email}))),
		// 		Promise.all(likedYou.map(user => Spotify.find({Email: user[0].Email}))),
		// 		Promise.all(mutual.map(user => Spotify.find({Email: user[0].Email}))),
		// 		Spotify.find({Email: currentEmail})
		// 	])
		// .then(([liked, likedYou, mutual, you]) => {
		// 	console.log(liked, likedYou, mutual, '*******', you)
		// 	return [liked, likedYou, mutual, you]
		// });
	});
}

module.exports = {getEligible, ratePeople, addChoice, getIncomingMatches};