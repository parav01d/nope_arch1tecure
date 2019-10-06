import { When } from "cucumber";
import Routes from "UserManagement/Routes";

// tslint:disable:only-arrow-functions

When(/^I try to register a User with the email "(.*)" and password "(.*)"$/, async function(email: string, password: string) {
  this.response = await this.callWith(Routes.REGISTER_USER, { body: { email, password } });
});
