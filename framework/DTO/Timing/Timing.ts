import { IsNumber } from "class-validator";

export class Timing {

    @IsNumber()
    public readonly dayOfTheWeek: number; // 0-6 monday-sunday

    @IsNumber()
    public readonly start: number;

    @IsNumber()
    public readonly end: number;

    constructor(payload: {
        dayOfTheWeek: number,
        start: number,
        end: number,
    }) {

      this.dayOfTheWeek = payload.dayOfTheWeek;
      this.start        = payload.start;
      this.end          = payload.end;
    }
}

export default Timing;
