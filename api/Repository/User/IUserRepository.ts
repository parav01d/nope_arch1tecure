import { User } from "Model";

export interface IUserRepository {
    getEmptyUserModel(): User;
    find(id: string): Promise<User>;
    save(user: User): Promise<User>;
}

export default IUserRepository;
