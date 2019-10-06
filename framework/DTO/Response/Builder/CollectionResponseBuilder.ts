import CollectionResponse from "Framework/DTO/Response/CollectionResponse";

class CollectionResponseBuilder {
    private _resources: any[];

    public setResources(resources: any[]): CollectionResponseBuilder {
      this._resources = resources;
      return this;
    }

    get resources() {
      return this._resources;
    }

    public build(): CollectionResponse {
        return new CollectionResponse(this);
    }
}

export default CollectionResponseBuilder;
