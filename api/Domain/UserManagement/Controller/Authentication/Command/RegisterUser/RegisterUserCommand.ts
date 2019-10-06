import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";

export class RegisterUserCommand {
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  public readonly password: string;
  @IsOptional()
  @IsString()
  public readonly name: string;

  constructor(payload: { email: string, password: string, name: string }) {
    this.email    = payload.email;
    this.password = payload.password;
    this.name = payload.name;
  }
}

export default RegisterUserCommand;
