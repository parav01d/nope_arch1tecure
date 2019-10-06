import NotFoundError from "Framework/DTO/Error/NotFoundError";

class NotFoundErrorBuilder {
    private _message: any;

    public setMessage(message: any): NotFoundErrorBuilder {
      this._message = message;
      return this;
    }

    get message() {
      return this._message;
    }

    public build(): NotFoundError {
        return new NotFoundError(this);
    }
}

export default NotFoundErrorBuilder;
