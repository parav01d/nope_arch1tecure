import { Then } from "cucumber";
import { expect } from "chai";
import * as util from "util";

// tslint:disable:only-arrow-functions

Then(/^the response status should be "(.*)"$/, function(status: string) {
  if (parseInt(this.response.statusCode, 10) !== parseInt(status, 10)) {
    console.log(util.inspect(this.response._getJSON(), false, null, true));
  }
  expect(parseInt(this.response.statusCode, 10)).to.equal(parseInt(status, 10));
});
