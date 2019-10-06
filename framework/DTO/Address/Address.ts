import { IsString, IsOptional } from "class-validator";

export class Address {
    @IsOptional()
    @IsString()
    public readonly addressLineOne: string;

    @IsOptional()
    @IsString()
    public readonly addressLineTwo: string;

    @IsOptional()
    @IsString()
    public readonly city: string;

    @IsOptional()
    @IsString()
    public readonly zipCode: string;

    @IsOptional()
    @IsString()
    public readonly country: string;

    constructor(payload: { addressLineOne: string, addressLineTwo: string, city: string, zipCode: string, country: string }) {
      this.addressLineOne   = payload.addressLineOne;
      this.addressLineTwo   = payload.addressLineTwo;
      this.city             = payload.city;
      this.zipCode          = payload.zipCode;
      this.country          = payload.country;
    }
}

export default Address;
