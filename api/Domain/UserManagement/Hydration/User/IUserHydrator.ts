import { User } from "Model";

export interface IEditableUserFields {
    email?: string;
    password?: string;
}

export interface IUserHydrator {
  hydrate(User: User, payload: IEditableUserFields): Promise<User>;
}

export default IUserHydrator;
