import { IsInt, IsNotEmpty } from "class-validator";

export interface IPaginationPayload {
  take: string;
  page: string;
}

export class Pagination {
  @IsNotEmpty()
  @IsInt()
  public readonly take: number;

  @IsNotEmpty()
  @IsInt()
  public readonly page: number;

  constructor(payload: { take: string, page: string }) {
    this.take = Number.parseInt(payload.take, 10);
    this.page = Number.parseInt(payload.page, 10);
  }
}

export default Pagination;
