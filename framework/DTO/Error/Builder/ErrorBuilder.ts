import Error from "Framework/DTO/Error/Error";

class ErrorBuilder {
    private _errors: any[];

    public setErrors(errors: any[]): ErrorBuilder {
      this._errors = errors;
      return this;
    }

    get errors() {
      return this._errors;
    }

    public build(): Error {
        return new Error(this);
    }
}

export default ErrorBuilder;
