const {app, connection} = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

describe('Query', () => {
    test('User', async () => {
        const data = JSON.stringify({
            query: `query {
               user(id: "b6381357-ebdc-4088-9d41-952087ee23c2"){
                id
                name
               }
            }`,
            variables: {}
        })
        const result = await request.post('/graphql').send(data).set({
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Connection': 'keep-alive',
            'DNT': '1',
            'Origin': 'http://localhost:3000'
        })
        const {id, name} = result.body.data.user
        expect(id).toBe('b6381357-ebdc-4088-9d41-952087ee23c2')
    })
});

afterAll(async () => {
    await connection.close();
});