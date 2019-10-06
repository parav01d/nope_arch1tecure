import IError from "Framework/DTO/Error/IError";
import InternalServerErrorBuilder from "Framework/DTO/Error/Builder/InternalServerErrorBuilder";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";

class InternalServerError implements IError {

  static builder() {
    return new InternalServerErrorBuilder();
  }
  private readonly _status = StatusCode.INTERNAL_SERVER_ERROR;
  private _message: string;

  constructor(builder: InternalServerErrorBuilder) {
      this._message = builder.message;
  }

  getStatus(): StatusCode {
    return this._status;
  }

  asJson(): any {
    return {
      error: {
        message: this._message
      }
    };
  }
}

export default InternalServerError;
