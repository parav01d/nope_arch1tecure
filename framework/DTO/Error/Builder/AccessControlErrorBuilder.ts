import AccessControlError from "Framework/DTO/Error/AccessControlError";

class AccessControlErrorBuilder {
    private _message: any;

    public setMessage(message: any): AccessControlErrorBuilder {
      this._message = message;
      return this;
    }

    get message() {
      return this._message;
    }

    public build(): AccessControlError {
        return new AccessControlError(this);
    }
}

export default AccessControlErrorBuilder;
