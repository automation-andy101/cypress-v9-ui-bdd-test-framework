class HomePage {

    getBrandBtn() {
        return cy.get('#nava');
    }

    getLaptopFilterElement() {
        return cy.get('[onclick="byCat(\'notebook\')"]');
    }

    clickLaptopFilterButton() {
        cy.get('.list-group').find('.list-group-item').each(($el, $index, $list) => {
            const elementText = $el.text();
            if (elementText.includes("Laptops")) {
                cy.wrap($el).click()
            }
        })
    }

    clickMonitorsFilterButton() {
        cy.get('.list-group').find('.list-group-item').each(($el, $index, $list) => {
            const elementText = $el.text();
            cy.log(elementText)
            if (elementText.includes("Monitors")) {
                cy.log("FOUND MONITOR")
                cy.wrap($el).click()
            }
        })
    }

    getNumberOfDisplayedProducts() {
        return cy.log(cy.get('#tbodyid').find('h4.card-title'));
    }

}

export default HomePage;
