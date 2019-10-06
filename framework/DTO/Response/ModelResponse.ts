import IResponse from "Framework/DTO/Response/IResponse";
import ModelResponseBuilder from "Framework/DTO/Response/Builder/ModelResponseBuilder";
import AbstractResponse from "Framework/DTO/Response/AbstractResponse";

class ModelResponse extends AbstractResponse implements IResponse {
  static builder(): ModelResponseBuilder {
    return new ModelResponseBuilder();
  }
  private _resource: any;

  constructor(builder: ModelResponseBuilder) {
    super();
    this._resource = builder.resource;
  }

  asJson() {
    return {
      resource: this._resource
    };
  }
}

export default ModelResponse;
