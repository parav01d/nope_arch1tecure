import { injectable, inject } from "inversify";
import AbstractUseCase from "Framework/UseCase/AbstractUseCase";
import IUseCase from "Framework/UseCase/IUseCase";
import ServiceModule, { IEventService, ITranslationService } from "Framework/Service";
import RepositoryModule, { IUserRepository} from "Repository";
import HydrationModule, { IUserHydrator } from "UserManagement/Hydration";
import { User } from "Model";
import { RegisterUserCommand } from "UserManagement/Controller/Authentication/Command";

injectable();
export class RegisterUserUseCase extends AbstractUseCase implements IUseCase {
    public static DOMAIN_EVENT_NAME: string = "UserRegisteredEvent";

    public constructor(
        @inject(ServiceModule.EventService) protected eventService: IEventService,
        @inject(ServiceModule.TranslationService) protected translationService: ITranslationService,
        @inject(RepositoryModule.UserRepository) protected userRepository: IUserRepository,
        @inject(HydrationModule.UserHydrator) protected UserHydrator: IUserHydrator,
    ) {
        super();
    }

    public async execute(command: RegisterUserCommand): Promise<User> {

        await this.validate(command);

        const emptyUser      = this.userRepository.getEmptyUserModel();
        const hydratedUser   = await this.UserHydrator.hydrate(emptyUser, command);
        const persistedUser  = await this.userRepository.save(hydratedUser);

        this.fireDomainEvent({ name: RegisterUserUseCase.DOMAIN_EVENT_NAME, account: persistedUser, payload: command, target: persistedUser });

        return persistedUser;
    }
}

export default RegisterUserUseCase;
