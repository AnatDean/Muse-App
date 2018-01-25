const {getEligible, ratePeople} = require('../models/matching');
const {getEmail} = require('../models/spotify')


function getMatches (req,res, next) {
    let email = getEmail();
    return getEligible(email)
    .then(eligibles => ratePeople(eligibles))
    .then(res.send)
}