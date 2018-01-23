const _ = require('lodash')

// topArtists: artist.genres must check whether live response allows array to be accessed
//or whether it shows up as keyword function: Array
function dataBaseFormatter (topTracksRes, topArtistsRes, artistsByTrackIdResArray, username) {
    let dataForDB = {
        username: username,
        songs: [],
        artists: []
        // genres: []
    }

    topTracks.items.forEach(song => dataForDB.songs.push([song.name, song.id]))
    topArtists.items.forEach(track => {
        dataForDB.artists.push(track.name)
        // dataForDB.genres.push(track.genres)
    }
    )
    artistsByTrackId.forEach(artist => {
        dataForDB.artists.push(artist.name);
    })

    Object.values(dataForDB).map(array => _.uniq(array))
    return dataForDB

}