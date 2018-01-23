const {formatTrack, formatArtists, formatGenres} = require('./models/formatting')
const formInput = [
    {firstName: 'Paul', Surname: 'Copley', Age: 31, AgeRange: {min:25, max:35}, Email: 'pkcopley@gmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrfhg', Bio: 'I am Paul'},
    {firstName: 'Megan', Surname: 'Field', Age: 25, AgeRange: {min:26, max:35}, Email: 'megan.field@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male', 'Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Megan'},
    {firstName: 'Anat', Surname: 'Dean', Age: 21, AgeRange: {min:21, max:27}, Email: 'anat62442@hotmail.co.uk', Gender: 'Female', GenderPreference: ['Male'], Area: 'Manchester', picture: 'https://ipojearhg', Bio: 'I am Anat'},
    {firstName: 'Sam', Surname: 'Edwards', Age: 28, AgeRange: {min:26, max:35}, Email: 'dj_sam_lea@hotmail.com', Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', picture: 'https://ihbgrffpojearhg', Bio: 'I am Sam'}
]

const spotifyResults = [
    {Email: 'dj_sam_lea@hotmail.com', songs: formatTrack(), artists: formatArtists(), genres: formatGenres()}
    // {username: 'Megan', songs: ['No Church In the Wild', 'Waterloo'], artists: ['Jay-Z', 'The Beatles']},
    // {username: 'Anat', songs: ['Gimme Gimme Gimme', 'Californication'], artists: ['Red Hot Chilli Peppers', 'ABBA']},
    // {username: 'Sam', songs: ['Does Your Mother Know', 'Scatman'], artists: ['Scatman John', 'The Beatles']}
]
module.exports = {formInput, spotifyResults}

