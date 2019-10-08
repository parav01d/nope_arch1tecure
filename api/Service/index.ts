import { ContainerModule, interfaces } from "inversify";
import TokenService from "Service/TokenService/TokenService";
import ITokenService from "Service/TokenService/ITokenService";

export * from "Service/TokenService/ITokenService";

class ServiceModule extends ContainerModule {
    static TokenService = Symbol("TokenService");

    constructor() {
        super((bind: interfaces.Bind) => {
            bind<ITokenService>(ServiceModule.TokenService).to(TokenService);
        });
    }
}

export default ServiceModule;
