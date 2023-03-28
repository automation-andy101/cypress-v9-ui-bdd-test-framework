Feature: Category filter

    Scenario: As a DemoBlaze user I want to filter by laptops so that I can only see only laptop products
        Given I am on the DemoBlaze website home page
        When I click on the Monitors filter button
        Then only Monitor products appear
