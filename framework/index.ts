import { Container } from "inversify";
import "reflect-metadata";
import ServiceModule from "Framework/Service";

const container = new Container();
const serviceModule = new ServiceModule();

container.load(
    serviceModule,
);

export default container;
