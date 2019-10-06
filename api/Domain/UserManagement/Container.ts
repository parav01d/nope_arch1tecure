import "reflect-metadata";
import { Container } from "inversify";
import ServiceModule from "Service";
import RepositoryModule from "Repository";

import AppControllerModule from "UserManagement/Controller";
import AppUseCaseModule from "UserManagement/UseCase";
import AppHydrationModule from "UserManagement/Hydration";

const container = new Container();
const serviceModule = new ServiceModule();
const repositoryModule = new RepositoryModule();

const appControllerModule = new AppControllerModule();
const appUseCaseModule = new AppUseCaseModule();
const appHydrationModule = new AppHydrationModule();

container.load(
    serviceModule,
    repositoryModule,
    appControllerModule,
    appUseCaseModule,
    appHydrationModule,
);

export default container;
