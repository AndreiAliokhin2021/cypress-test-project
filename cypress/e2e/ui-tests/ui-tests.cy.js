import {
    GoogleStoreForGoogleMadeDevicesAccessoriesPage
} from "../../page-objects/GoogleStoreForGoogleMadeDevicesAccessoriesPage"
import {SearchResultsPage} from "../../page-objects/SearchResultsPage"

const googleStoreForGoogleMadeDevicesAccessoriesPage = new GoogleStoreForGoogleMadeDevicesAccessoriesPage();
const searchResultPage = new SearchResultsPage();

describe('Google store tests', () => {
    before(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })
    it('Search test', () => {
        cy.get('@productData').then((productData) => {
            cy.log('GIVEN: user is on GoogleStoreForGoogleMadeDevicesAccessoriesPage')
            googleStoreForGoogleMadeDevicesAccessoriesPage.open()

            cy.log('WHEN: user performs search product by name')
            googleStoreForGoogleMadeDevicesAccessoriesPage.performSearch(productData.name)

            searchResultPage.getProductByDocId(productData.name).should('exist')
        })
    })
})