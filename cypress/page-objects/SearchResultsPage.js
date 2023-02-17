export class SearchResultsPage {

    getProductByDocId(docId) {
       return  cy.get(`[aria-label*="${docId}"]`)
    }

}