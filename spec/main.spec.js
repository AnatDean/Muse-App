const { expect } = require('chai')
const mongoose = require('mongoose')
const app = require('../app')
const request = require('supertest')(app)
const { getEmail } = require('../models/spotify')
const url = require('../config').DB.test;
process.env.NODE_ENV = "test"

describe('Routing', () => {



  beforeEach('', () => {
    mongoose.connect(url, {autoIndex: false}, () => {})
  })

  afterEach('', () => {
    // mongoose.disconnect()
  })

  after('', () => {
    mongoose.disconnect()
    process.exit()
  })

  describe('/api/', () => {
    it('/authorise', () => {
      return request
        .get('/api/authorise')
        .expect(302)
        .expect('Location', 'https://accounts.spotify.com/authorize?response_type=code&client_id=8681a5901c0f4e929658533e0db138c4&scope=user-read-private%20user-read-email%20user-top-read%20user-read-birthdate&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorised')
    });
    it('/profile', () => {
      return request
        .get('/api/user/profile')
        .expect(200)
        .then(res => {
          expect(res.body.AgeRange).to.be.a('array')
          expect(res.body.GenderPreference).to.be.a('array')
          expect(res.body.Email).to.be.a('string')
        });
    })
    it('/profile', () => {
      return request
      .patch('/api/user/profile')
      .send({Email: 'pkcopley@gmail.com', AgeRange: [27, 35], Gender: 'Male', GenderPreference: ['female'], Area: 'Manchester', Bio: 'for i am Paul!'})
      .expect(200)
      .then(res => {
        expect(res.body.Bio).to.equal('for i am Paul!');
      })
    })
  })
});