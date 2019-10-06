import ModelResponse from "Framework/DTO/Response/ModelResponse";

class ModelResponseBuilder {
    private _resource: any;

    public setResource(resource: any): ModelResponseBuilder {
      this._resource = resource;
      return this;
    }

    get resource() {
      return this._resource;
    }

    public build(): ModelResponse {
        return new ModelResponse(this);
    }
}

export default ModelResponseBuilder;
