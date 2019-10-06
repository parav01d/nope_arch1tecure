import * as moment from "moment";
import { IEventService, ITranslationService } from "Framework/Service";
import AccessControlError from "Framework/DTO/Error/AccessControlError";
import {injectable} from "inversify";
import IUseCase from "./IUseCase";
import { validate as classValidate } from "class-validator";
import ValidationError from "Framework/DTO/Error/ValidationError";
import Error from "Framework/DTO/Error/Error";
import NotFoundError from "Framework/DTO/Error/NotFoundError";
import { ERROR_MESSAGE_UNAUTHORIZED, ERROR_MESSAGE_NOT_FOUND } from "Translation";

@injectable()
abstract class AbstractUseCase implements IUseCase {

    protected abstract eventService: IEventService;
    protected abstract translationService: ITranslationService;
    public abstract execute(payload: any, currentAccount?: any): Promise<any>;

    protected async validate(payload: any): Promise<void> {
      return classValidate(payload).then((errors) => {
        if (errors.length > 0 ) {
          throw ValidationError.builder().setErrors(errors).build();
        }
      });
    }

    protected existanceCheck(resource: any) {
      if (!resource) {
        throw NotFoundError.builder().setMessage(this.translationService.translate(ERROR_MESSAGE_NOT_FOUND)).build();
      }
    }

    protected throwError(errorMessage: string[]) {
      throw Error.builder().setErrors(errorMessage).build();
    }

    protected calculateSymmetricDifference(arr1: number[], arr2: number[]) {
      return arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)));
    }

    protected calculateNewIds(arr1: number[], arr2: number[]) {
      return arr1.filter((x) => !arr2.includes(x));
    }

    protected calculateDeletedIds(arr1: number[], arr2: number[]) {
      return arr2.filter((x) => !arr1.includes(x));
    }

    protected accountNotExist(resource: any, payload: any): void {
      if (resource) {
        throw ValidationError.builder().setErrors([{
            target: payload,
            value: payload.email,
            property: "email",
            children: [],
            constraints: {
              notExist: "account with email does exists"
            }
        }]).build();
      }
    }

    protected fireDomainEvent<Payload, Model>({name, payload, account, target, targets}: {name: string, payload: Payload, account?: any, target?: Model, targets?: Model[]}): void {
        this.eventService.dispatch<Payload, Model>(name, { payload, account, target, targets });
    }

    protected checkAuthentication(account: any) {
        if (!account || moment().isAfter(moment(account.accessTokens[0].accessTokenExpiresAt))) {
            throw AccessControlError.builder().setMessage(this.translationService.translate(ERROR_MESSAGE_UNAUTHORIZED)).build();
        }
    }

}

export default AbstractUseCase;
