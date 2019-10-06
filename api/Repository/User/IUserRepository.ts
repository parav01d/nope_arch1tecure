import { User } from "Model";

export interface IUserRepository {
    getEmptyUserModel(): User;
    save(user: User): Promise<User>;
}

export default IUserRepository;
