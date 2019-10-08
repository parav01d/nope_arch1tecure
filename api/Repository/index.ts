import { ContainerModule, interfaces } from "inversify";

import IUserRepository from "Repository/User/IUserRepository";
import UserRepository from "Repository/User/UserRepository";

export * from "Repository/User/IUserRepository";

export class RepositoryModule extends ContainerModule {

  static UserRepository = Symbol("UserRepository");

  constructor() {
    super((bind: interfaces.Bind) => {
      bind<IUserRepository>(RepositoryModule.UserRepository).to(UserRepository);
    });
  }
}

export default RepositoryModule;
