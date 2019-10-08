import { IsString, IsEmail, MinLength } from "class-validator";

export class User {

  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export default User;
