const {expect} = require('chai')
const mongoose = require('mongoose')
const app = require('../app')
const request = require('supertest')(app)
const seed = require('../seed/seed')
const {getEmail} = require('../models/spotify')

process.env.NODE_ENV = "test"

describe('Routing', () => {

  beforeEach(() => {
    return mongoose.connection.dropDatabase()
      .then(seed)
  });

  describe('/api/', () => {
    it('/authorise', () => {
      return request
        .get('/api/authorise')
        .expect(302)
        .expect('Location', 'https://accounts.spotify.com/authorize?response_type=code&client_id=8681a5901c0f4e929658533e0db138c4&scope=user-read-private%20user-read-email%20user-top-read%20user-read-birthdate&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorised')
    });
  });

});

describe('Models', () => {
  after('', () => {
    process.exit()
  });
  describe('getEmail', () => {

    it('Returns the logged in users e-mail address.', () => {
      return getEmail()
        .then(email => {
          console.log(email)
          expect(email).to.equal('pkcopley@gmail.com')
        })
    });
  });
});