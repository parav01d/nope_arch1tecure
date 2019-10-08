import { injectable } from "inversify";
import { IUserRepository } from "Repository";
import { User } from "Model";

@injectable()
class UserRepository implements IUserRepository {
    public getEmptyUserModel(): User {
        return new User();
    }

    public async find(id: string): Promise<User> {
      const user = new User();
      user.id = `${id}`;
      user.email = "john@doe.de";
      user.password = "123123";
      return Promise.resolve(user);
    }

    public async save(user: User): Promise<User> {
      return Promise.resolve(user);
    }

}

export default UserRepository;
