import EmptyResponse from "Framework/DTO/Response/EmptyResponse";

class EmptyResponseBuilder {
    public build(): EmptyResponse {
        return new EmptyResponse(this);
    }
}

export default EmptyResponseBuilder;
