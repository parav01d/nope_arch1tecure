import IError from "Framework/DTO/Error/IError";
import AccessControlErrorBuilder from "Framework/DTO/Error/Builder/AccessControlErrorBuilder";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";

class AccessControlError implements IError {

  static builder() {
    return new AccessControlErrorBuilder();
  }
  private readonly _status = StatusCode.UNAUTHORIZED;
  private _message: string;

  constructor(builder: AccessControlErrorBuilder) {
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

export default AccessControlError;
