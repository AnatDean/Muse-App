const { expect } = require('chai')
const mongoose = require('mongoose')
const app = require('../app')
const request = require('supertest')(app)
const { getEmail } = require('../models/spotify')
const url = require('../config').DB.test;
process.env.NODE_ENV = "test"

describe('Routing', () => {
  after('', () => {
    mongoose.disconnect()
    process.exit()
  })
  describe('/api/', () => {
    this.timeout = 5000
    it('/authorise GET requests redirect to authentication by Spotify.', () => {
      return request
        .get('/api/authorise')
        .expect(302)
        .expect('Location', 'https://accounts.spotify.com/authorize?response_type=code&client_id=8681a5901c0f4e929658533e0db138c4&scope=user-read-private%20user-read-email%20user-top-read%20user-read-birthdate&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorised')
    });
    it('user/profile GET requests return the logged in users profile.', () => {
      return request
        .get('/api/user/profile/pkcopley@gmail.com')
        .expect(200)
        .then(res => {
          expect(res.body.AgeRange).to.be.a('array')
          expect(res.body.GenderPreference).to.be.a('array')
          expect(res.body.Email).to.be.a('string')
        });
    })
    it('user/profile PATCH requests update a users data in the users collection', () => {
      return request
      .patch('/api/user/profile/pkcopley@gmail.com')
      .send({ Email: 'pkcopley@gmail.com', AgeRange: [{min: 22, max: 35}], Gender: 'Male', GenderPreference: ['Female'], Area: 'Manchester', Bio: 'for i am Paul!' })
      .expect(200)
      .then(res => {
        expect(res.body.Bio).to.equal('for i am Paul!');
      })
    })
    it('/user/matches GET requests returns an ordered array of the matches for the logged in user', () => {
      return request
        .get('/api/user/matches/pkcopley@gmail.com')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
        })
    });
    it('/user/matches PATCH requests add a user to the logged in users rejection array.', () => {
      return request
        .patch('/api/user/profile/pkcopley@gmail.com')
        .send({email: 'marge.baird@hotmail.com', choice: 'rejected'})
        .expect(200)
        .then(res => {
          expect(res.body.rejected).to.be.an('array')
        })
    });
  })
});