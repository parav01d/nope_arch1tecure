import StatusCode from "Framework/DTO/StatusCode/StatusCode";

interface IError {
  getStatus(): StatusCode;
  asJson(): any;
}

export default IError;
