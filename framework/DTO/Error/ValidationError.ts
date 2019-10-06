import IError from "Framework/DTO/Error/IError";
import ValidationErrorBuilder from "Framework/DTO/Error/Builder/ValidationErrorBuilder";
import StatusCode from "Framework/DTO/StatusCode/StatusCode";

class ValidationError implements IError {
  static builder() {
    return new ValidationErrorBuilder();
  }
  private readonly _status = StatusCode.BAD_REQUEST;
  private _errors: any[];

  constructor(builder: ValidationErrorBuilder) {
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

export default ValidationError;
