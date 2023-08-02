// Constructs of Cypress:
// describe(): It is is simply a way to group our tests. It takes two arguments, the first is the name of the test group, and the second is a callback function.
// context(): It is is just an alias for describe().
// it(): We use it for an individual test case. It takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test.
// before():  It runs once before all tests in the block.
// after(): It runs once after all tests in the block.
// beforeEach(): It runs before each test in the block.
// afterEach(): It runs after each test in the block.
// .only(): To run a specified suite or test, append ".only" to the function.
// .skip(): To skip a specified suite or test, append ".skip()" to the function.

describe('My First Cypress Test', () => {
    it('Visits the ToolsQA Demo Page and check the menu items', () => {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    
   // Clicking on Widget Menu Item
   // Fetched the CSS selector from Open Selector Playground
   cy.get('#menu-top > li:nth-child(3) > a').click();
  })
})