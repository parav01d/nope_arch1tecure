import { ContainerModule, interfaces } from "inversify";
import { IAuthenticationController } from "UserManagement/Controller/Authentication/IAuthenticationController";
import AuthenticationController from "UserManagement/Controller/Authentication/AuthenticationController";

export * from "UserManagement/Controller/Authentication/IAuthenticationController";

class AppControllerModule extends ContainerModule {
    static GamificationController = Symbol("UserManagement/GamificationController");
    static AuthenticationController = Symbol("UserManagement/AuthenticationController");
    static GastronomyController = Symbol("UserManagement/GastronomyController");

    constructor() {
        super((bind: interfaces.Bind) => {
          bind<IAuthenticationController>(AppControllerModule.AuthenticationController).to(AuthenticationController);
        });
    }
}

export default AppControllerModule;
