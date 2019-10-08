import { Then } from "cucumber";
import { expect } from "chai";
import * as util from "util";
import { ValidationError } from "class-validator";

// tslint:disable:only-arrow-functions

Then(/^the response status should be "(.*)"$/, function(status: string) {
  if (parseInt(this.response.statusCode, 10) !== parseInt(status, 10)) {
    console.log(util.inspect(this.response._getJSON(), false, null, true));
  }
  expect(parseInt(this.response.statusCode, 10)).to.equal(parseInt(status, 10));
});

Then(/^the response validation key is "(.*)"$/, async function(key: string) {
  const response = this.response._getJSON();
  key.split(",").forEach((k) => {
    const error = response.error.find((e: ValidationError) => e.property === k);
    expect(error).to.not.be.equal(null);
  });
});
