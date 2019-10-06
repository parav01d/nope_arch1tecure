
import { Request, Response } from "express";
import { injectable, inject, named } from "inversify";
import { IAuthenticationController } from "UserManagement/Controller";
import AbstractController from "Framework/Controller/AbstractController";
import STATUS_CODE from "Framework/DTO/StatusCode/StatusCode";
import IError from "Framework/DTO/Error/IError";
import ModelResponse from "Framework/DTO/Response/ModelResponse";
import UseCaseModule, { RegisterUserUseCase } from "UserManagement/UseCase";
import { RegisterUserCommand } from "UserManagement/Controller/Authentication/Command";

@injectable()
class AuthenticationController extends AbstractController implements IAuthenticationController {

  public constructor(
      @inject(UseCaseModule.UseCase)
      @named(UseCaseModule.RegisterUserUseCase)
      private readonly registerUserUseCase: RegisterUserUseCase,
    ) {
        super();
    }

  public async registerUser(request: Request, response: Response): Promise<Response> {
    return this.registerUserUseCase.execute(new RegisterUserCommand({
      email:    request.body.email,
      password: request.body.password,
      name:     request.body.name,
    })).then((user) => {
        return response.status(STATUS_CODE.CREATED).send(
          ModelResponse.builder().setResource(user).build().asJson()
        );
      })
      .catch((error: IError) => {
        return this.createErrorResponse(response, error);
      });
  }
}

export default AuthenticationController;
