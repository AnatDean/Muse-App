
const formatTrack = (topTracks) => {
	return topTracks.map(song => song.name);
};


const formatArtists = (topArtists) => {
	return topArtists.reduce((acc, artist) =>{
		acc.push([artist.name, artist.popularity]);
		return acc;
	}, [] );
};

const formatGenres = (topArtists) => {
	let genresObject = {};
	topArtists.forEach(artist => {artist.genres.forEach(genre =>
		(genresObject.hasOwnProperty(genre))? genresObject[genre]++ : genresObject[genre] = 1);
	});
	return genresObject;
};

module.exports = {formatTrack, formatArtists, formatGenres};