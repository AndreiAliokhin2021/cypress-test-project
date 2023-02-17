export class GoogleStoreForGoogleMadeDevicesAccessoriesPage {

    get searchIcon() {
        return cy.get('[data-test="header-search"]')
    }

    get searchBar() {
        return cy.get('[aria-label="Main Navigation"]')
    }

    open() {
        cy.visit(Cypress.env('googleStoreUrl'))
    }

    performSearch(productToSearch) {
        this.searchIcon.click()
        this.searchBar.type(`${productToSearch}{enter}`);
    }
}