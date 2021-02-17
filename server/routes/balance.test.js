const request = require('supertest')
 
const server = require('../server.js')
test('/balance route returns an array of objects', () => {
  const expected = true
  return request(server)
    .get('/api/v1/balance')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(Array.isArray(res.body)).toBeTruthy()
    })
})