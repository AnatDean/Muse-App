var querystring = require('querystring');
const client_id = require('../config').spotifyClient.id

function authApp(req, res, next) {
  const scope = 'user-read-private user-read-email user-top-read';
  const queries = querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: 'http://localhost:3000/api/authorised'
  })
  res.redirect('https://accounts.spotify.com/authorize?' + queries )
}

module.exports = {authApp}