const request = require('supertest')
const app = require('../routes/api')

describe('Simple Math Test', () => {
  it('should return 4 when adding 2 + 2', () => {
    const result = 2 + 2
    expect(result).toBe(4)
  })
})
