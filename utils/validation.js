
const { debugMsg } = require( "./debug");
/**
 * Validates the inputs based on the provided tests.
 *
 * @param {Object} inputs - The inputs by each key of the tests. 
 * @param {Object} tests - The tests to be applied on each key in the inputs.
 * @returns {Object} - { passed: boolean, values: Object, errors: Object }
 */
async function validateInputs(inputs, tests) {
    let errors = {};
    let values = {};
    let passed = false;

    await Promise.all(Object.keys(tests).map(async (key) => {
        // see if key is in inputs
        if (!inputs.hasOwnProperty(key)) {
            errors[key] = tests[key].none;
        } 
        let test = await tests[key].test(inputs[key], inputs);
        if (typeof test === 'string') {
            errors[key] = test;
        } else {
            values[key] = inputs[key];
        }
    }));

    if(Object.keys(errors).length === 0){
        passed = true;
    }
   
    let validation = {
        passed,
        values,
        errors
    }; 
    debugMsg("validation : " + JSON.stringify(validation));
    return validation;
}

const validation = {
    validateInputs
};

module.exports = validation;
