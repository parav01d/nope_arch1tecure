import "reflect-metadata";
import { Container } from "inversify";
import DependencyInjectionContainer from "./Container";
import FrameworkContainer from "Framework";
import ControllerModule from "UserManagement/Controller";
import { IAuthenticationController } from "UserManagement/Controller";

class Routes {

    static REGISTER_USER = "REGISTER_USER";

    private container: Container;

    private authenticationController: IAuthenticationController;

    public getRoutes() {
        return [
          {
                path: "/user",
                name: Routes.REGISTER_USER,
                method: "post",
                action: this.authenticationController.registerUser.bind(this.authenticationController),
                middlewares: [],
                documentation: {
                  payload: "RegisterUserCommand",
                  resource: "User",
                  resources: null
                }
          }
        ];
    }

    public getContainer(): Container {
      return this.container as Container;
    }

    public setContainer(container: Container) {
      this.container = container;
    }

    public initializeContainer() {
      this.container = Container.merge(DependencyInjectionContainer, FrameworkContainer) as Container;
    }

    public initializeDependencies() {
      this.authenticationController = this.container.get<IAuthenticationController>(ControllerModule.AuthenticationController);
    }
}

export default Routes;
