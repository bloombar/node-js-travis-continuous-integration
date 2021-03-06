/**
 * Various unit tests of the Rectangle class
 */

// STEP 0 - DO ANY IMPORTS

// first import relevant modules
import assert from 'assert'; // node's unit testing assertion library

// import the custom class we're testing
import Rectangle from '../src/objects_classes_example/Rectangle';



// STEP 1 - DEFINE TEST GROUP
// define a test group named 'Rectangle tests'
// This will nicely group all unit tests of the Rectangle class, defined in Rectangle.js
describe('Object classes example tests', () => {

    // STEP 2 - DEFINE ANY HOOKS
    // these allow you to (optionally) run any general setup or teardown shared by all tests in this group

    before(function() {
        // put any code here that you want to run before ANY tests are run
        // console.log("About to run a batch of tests...");
    });

    beforeEach(function() {
        // put any code here that you want to run before EACH tests is run
        // console.log("About to run a test...");
    });

    afterEach(function() {
        // put any code here that you want to run after EACH tests is run
        // console.log("Just finished a test...");
    });

    after(function() {
        // put any code here that you want to run after ALL tests have completed
        // console.log("Just finished a batch of tests...");
    });


    // STEP 3 - DEFINE UNIT TESTS IN THIS GROUP
    // unit tests should be in isolation

    // set up the object we will use for these tests
    let rect = new Rectangle(3,2);

    // write a message what the test should do
    it('Getter of area of 3x2 rectangle should be 6.', function() {
        // insert your test case code here
        assert.equal(6, rect.area);
    });

    // write a message what the test should do
    it('Calculator of area of 3x2 rectangle should be 6.', function() {
        // insert your assertion for this unit test here
        assert.equal(6, rect.calcArea());
    });
    
});

