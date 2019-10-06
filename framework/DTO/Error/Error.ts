import IError from "Framework/DTO/Error/IError";
import ErrorBuilder from "Framework/DTO/Error/Builder/ErrorBuilder";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";

class Error implements IError {
  static builder() {
    return new ErrorBuilder();
  }
  private readonly _status = StatusCode.BAD_REQUEST;
  private _errors: any[];

  constructor(builder: ErrorBuilder) {
      this._errors = builder.errors;
  }

  getStatus(): StatusCode {
    return this._status;
  }

  asJson(): any {
    return {
      error: this._errors
    };
  }
}

export default Error;
