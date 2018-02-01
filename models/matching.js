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
			let currentAgeRange = current.AgeRange[0];
			return Promise.all([User.find({$and: [{Age : {$gte: currentAgeRange.min}},{Age : {$lte: currentAgeRange.max}}]}),	current])   
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

function ratePeople (currentUseremail, emails) {
	return Spotify.find()
	.then(eligibleSpotifys => { 
		let people = eligibleSpotifys.filter(person => {
			if (emails.includes(person.Email)) return 1;
				else return 0;
			});
			return Promise.all([Spotify.findOne({Email: currentUseremail}), people])
		})
		.then(([userObject, possibleMatches]) => {
			return Promise.all(possibleMatches.map(
				function(person) {
					return comparePeople(person, userObject);     
				}));
			})
			.then(matches => {
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
			let currentTrackNames = current.tracks.map(track=> track.trackName)
			userProfile.rating = 0;
			userProfile.matchingOn = {
				tracks: [],
				artists: [],
				genres: []
			};
			person.tracks.forEach((track) => {
				if (currentTrackNames.includes(track.trackName)) {
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
			
			for (let key in current.genres[0]) {
				if (person.genres[0].hasOwnProperty(key)) {
					userProfile.rating += person.genres[0][key] * 2;
					userProfile.matchingOn.genres.push(key);
				}
			}		
			return userProfile;
		});
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
			return Promise.all([
				Promise.all(likedYou.map(user => User.find({Email:user.Email}))),
				Promise.all(mutual.map(user => User.find({Email: user})))
				]);
		})
		.then(([likedYou, mutual]) => {
			let mutualEmails = [];
			let likedYouEmails = [];
			likedYou[0] ? likedYouEmails = likedYou.map(user => user[0].Email) : null;
			mutual[0] ? mutualEmails = mutual.map(user => user[0].Email) : null;
			return Promise.all([
				ratePeople(currentEmail, likedYouEmails),
				ratePeople(currentEmail, mutualEmails)
			])
		.then(([likedYouSharedSongs, mutualSharedSongs]) => {
			return [likedYouSharedSongs, mutualSharedSongs];
		})
	});
}

module.exports = {getEligible, ratePeople, addChoice, getIncomingMatches};