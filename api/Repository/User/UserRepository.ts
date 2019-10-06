import { injectable } from "inversify";
import { IUserRepository } from "Repository";
import { User } from "Model";

@injectable()
class UserRepository implements IUserRepository {
    public getEmptyUserModel(): User {
        return new User();
    }
    public async save(user: User): Promise<User> {
      return Promise.resolve(user);
    }
}

export default UserRepository;
