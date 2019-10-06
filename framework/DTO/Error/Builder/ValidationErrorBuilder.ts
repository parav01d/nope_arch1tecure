import ValidationError from "Framework/DTO/Error/ValidationError";

class ValidationErrorBuilder {
    private _errors: any[];

    public setErrors(errors: any[]): ValidationErrorBuilder {
      this._errors = errors;
      return this;
    }

    get errors() {
      return this._errors;
    }

    public build(): ValidationError {
        return new ValidationError(this);
    }
}

export default ValidationErrorBuilder;
