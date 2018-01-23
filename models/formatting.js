const  {topTracks, topArtists} = require ('../../formatting_res/spotify-data.js')


const formatTrack = () => {
   return topTracks.items.map(song => song.name)
}


const formatArtists = () => {
    return topArtists.items.reduce((acc, artist) =>{
        acc.push([artist.name, artist.popularity])
        return acc;
    }, [] )
}

const formatGenres = () => {
    let genresObject = {}
    topArtists.items.forEach(artist => {artist.genres.forEach(genre =>
            (genresObject.hasOwnProperty(genre))? genresObject[genre]++ : genresObject[genre] = 1)
    })
    return genresObject
}

module.exports = {formatTrack, formatArtists, formatGenres}