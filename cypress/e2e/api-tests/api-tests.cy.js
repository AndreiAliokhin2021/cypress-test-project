import Chance from 'chance'

describe('Test for reqres', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    // https://on.cypress.io/interacting-with-elements

    it('Positive: Create user', () => {
        cy.fixture('user').then(user => {
            cy.request('POST', '/api/users', user).then(response => {//TODO work with fixtures
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('job', user["job"])
            })
        })
    })

    it('Negative: POST request - login unsuccessful', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false,// TODO flag for negative tests
            body: {"email": "petr@klaven"}
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })


    let testingData = [{ //TODO generate testing data
        description: "Max values", requestData: {
            name: Chance().string({length: 100}),
            job: Chance().string({length: 100})
        }
    },
        {
            description: "Min values", requestData: {
                name: Chance().string({length: 100}),
                job: Chance().string({length: 100})
            }
        }]

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
            cy.request('POST', '/api/users', requestData).then(response => {//TODO work with fixtures
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', requestData.name)
                expect(response.body).to.have.property('job', requestData["job"])
            })
        })
    })
})