const validator = require('../src/utils/formValidator');
const assert = require('assert');

const validatorr = new validator();

describe('Validation', () => {
  it("", () => {
    assert.equal(validator.isNumberValide('3213'), true);
  })
})