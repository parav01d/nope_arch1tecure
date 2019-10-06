import IResponse from "Framework/DTO/Response/IResponse";
import CollectionResponseBuilder from "Framework/DTO/Response/Builder/CollectionResponseBuilder";
import AbstractResponse from "Framework/DTO/Response/AbstractResponse";

class CollectionResponse extends AbstractResponse implements IResponse {

  static builder(): CollectionResponseBuilder {
    return new CollectionResponseBuilder();
  }
  private _resources: any[];

  constructor(builder: CollectionResponseBuilder) {
    super();
    this._resources = builder.resources;
  }

  asJson() {
    return {
      resources: this._resources
    };
  }
}

export default CollectionResponse;
