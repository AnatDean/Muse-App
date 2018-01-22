var querystring = require('querystring');
const client_id = require('../config').spotifyClient.id
const client_secret = require('../config').spotifyClient.secret
const fs = require('fs')
const request = require('request')
const path = require('path')

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

function updateUserData(req, res, next) {

}

function getToken(req, res, next) {
  return new Promise((resolve, reject) => {
    const code = req.query.code || null;

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: 'http://localhost:3000/api/authorised',
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
  
    request.post(authOptions, function (error, res, body) {
      if (!error) {
        const tokens = {
          access_token: body.access_token,
          refresh_token: body.refresh_token
        }
        resolve(tokens)
      } else {
        reject(error)
      }
    })
  })
  .catch(console.log)
}

function refreshToken(req, res, next) {

}

module.exports = {authApp, updateUserData, getToken}