import { ContainerModule, interfaces } from "inversify";
import IUseCase from "Framework/UseCase/IUseCase";

import RegisterUserUseCase from "UserManagement/UseCase/Authentication/RegisterUserUseCase";

export * from "UserManagement/UseCase/Authentication/RegisterUserUseCase";

export class AppUseCaseModule extends ContainerModule {
    static UseCase = Symbol("UserManagement/UseCase");
    static RegisterUserUseCase = Symbol("UserManagement/RegisterUserUseCase");

    constructor() {
        super((bind: interfaces.Bind) => {
          bind<IUseCase>(AppUseCaseModule.UseCase).to(RegisterUserUseCase).whenTargetNamed(AppUseCaseModule.RegisterUserUseCase);
        });
    }
}

export default AppUseCaseModule;
