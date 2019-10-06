import InternalServerError from "Framework/DTO/Error/InternalServerError";

class InternalServerErrorBuilder {
    private _message: any;

    public setMessage(message: any): InternalServerErrorBuilder {
      this._message = message;
      return this;
    }

    get message() {
      return this._message;
    }

    public build(): InternalServerError {
        return new InternalServerError(this);
    }
}

export default InternalServerErrorBuilder;
