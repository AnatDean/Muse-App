function getEligible (email) { 

    let current = users.findOne({Email: email})
    let currentGender = current.Gender;
    let currentPreference = current.GenderPreferences
    let currentAge = current.Age
    let currentAgeRange = current.AgeRange
    //location

    const eligableAges = users.find({$and: [
        {Age : {$gte: currentAgeRange[0]}},
        {Age : {$lte: currentAgeRange[1]}}
    ]});

    return eligableAges.filter(person => {
        if (currentAge < person.AgeRange[0] || currentAge > person.AgeRange[1]) return 0
        if (!currentPrefence.includes(person.Gender)) return 0;
        if (!person.GenderPreferences.includes(currentGender)) return 0;
        else return 1
    }).map(person => person.Email)
}

function ratePeople (emails) {

    let eligibleSpotifys = Spotify.find();

    let people = eligibleSpotifys.filter(person => {
        if (emails.includes(person.Email)) return 1;
        else return 0
    })

    let currentEmail = getEmail();
    let currentSpotify = Spotify.findOne({Email: currentEmail})

    return people.map(comparePeople(person, currentSpotify )).sort((a,b) => {
         return a.rating - b.rating})
}


function comparePeople (person, current) {
    let user = {
        email: person.Email,
        rating: 0
    }

person.tracks.forEach((track) => {
    current.topTracks.includes(track)  ? user.rating += 10 : null
})

let currentArtists = current.topArtists.map(artist => artist[0])
person.artists.foEach((artist) => {
    currentArtists.includes(artist[0])?  user.rating += 4: null
})

for (let key in current.genres) {
    if (person.genre.hasOwnPropety(key)) user.rating += person.genre[key]*2
}

return user;
}


module.exports = {getEligible, ratePeople}