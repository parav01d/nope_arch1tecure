import IError from "Framework/DTO/Error/IError";
import NotFoundErrorBuilder from "Framework/DTO/Error/Builder/NotFoundErrorBuilder";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";

class NotFoundError implements IError {
  static builder() {
    return new NotFoundErrorBuilder();
  }
  private readonly _status = StatusCode.NOT_FOUND;
  private _message: string;

  constructor(builder: NotFoundErrorBuilder) {
      this._message = builder.message;
  }

  getStatus(): StatusCode {
    return this._status;
  }

  asJson(): any {
    return {
      message: this._message
    };
  }
}

export default NotFoundError;
