import { BeforeAll, Before, AfterAll, After  } from "cucumber";
import { Container } from "inversify";

// tslint:disable:only-arrow-functions

BeforeAll(async function() {});

Before(async function() {
  this.routes.initializeContainer();
  const container = this.routes.getContainer() as Container;
  this.routes.setContainer(container);
  this.routes.initializeDependencies();
});

After(async function() {});

AfterAll(async function() {});
