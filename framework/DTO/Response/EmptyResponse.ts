import IResponse from "Framework/DTO/Response/IResponse";
import EmptyResponseBuilder from "Framework/DTO/Response/Builder/EmptyResponseBuilder";
import AbstractResponse from "Framework/DTO/Response/AbstractResponse";

class EmptyResponse extends AbstractResponse implements IResponse {
  static builder(): EmptyResponseBuilder {
    return new EmptyResponseBuilder();
  }
  constructor(builder: EmptyResponseBuilder) {
    super();
  }

  asJson() {
    return {};
  }
}

export default EmptyResponse;
