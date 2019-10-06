import { injectable } from "inversify";
import { IUserHydrator, IEditableUserFields } from "UserManagement/Hydration";
import { User } from "Model";

@injectable()
export class UserHydrator implements IUserHydrator {

    public async hydrate(user: User, payload: IEditableUserFields): Promise<User> {
        if ( payload.email ) {
          user.email = payload.email;
        }
        if ( payload.password ) {
          user.password = payload.password;
        }
        return user;
    }
}

export default UserHydrator;
