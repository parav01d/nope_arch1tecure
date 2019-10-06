import { ContainerModule, interfaces } from "inversify";
import UserHydrator from "UserManagement/Hydration/User/UserHydrator";
import IUserHydrator from "UserManagement/Hydration/User/IUserHydrator";

export * from "UserManagement/Hydration/User/IUserHydrator";

export class AppHydrationModule extends ContainerModule {
  static UserHydrator = Symbol("UserManagement/UserHydrator");

  constructor() {
      super((bind: interfaces.Bind) => {
        bind<IUserHydrator>(AppHydrationModule.UserHydrator).to(UserHydrator);
      });
  }
}

export default AppHydrationModule;
