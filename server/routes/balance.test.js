const request = require('supertest')

//this code will hit the api
//mock out the api calls
const server = require('../server.js')
test('/balance route returns an array of objects', () => {
  const expected = true
  return request(server)
    .get('/api/v1/balance')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      //more tests about the response
      //check data matches form promised in readme
      expect(Array.isArray(res.body)).toBeTruthy()
    })
})
