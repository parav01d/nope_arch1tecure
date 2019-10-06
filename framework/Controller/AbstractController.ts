import { injectable } from "inversify";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";
import IError from "Framework/DTO/Error/IError";
import { Response } from "express";

@injectable()
abstract class AbstractController {

    protected createErrorResponse(response: Response, error: IError) {
      if (error.getStatus) {
        return response.status(error.getStatus()).send(error.asJson());
      } else {
        console.log(error);
        return response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
      }
    }
}

export default AbstractController;
