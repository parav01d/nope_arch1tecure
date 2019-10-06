import { IsNumber, IsOptional } from "class-validator";

export interface IPoint {
  x: number;
  y: number;
}

export interface ILocation {
  longitude: number;
  latitude: number;
}

export interface ISpatialPoint {
  type: "point";
  coordinates: [number, number];
}

export const convertLocationToSpatialPoint = (location: ILocation): ISpatialPoint => (
  location
    ? {type: "point", coordinates: [location.latitude, location.longitude]}
    : null);

export const convertSpatialPointToLocation = (point: ISpatialPoint ) => (point ? {
  latitude: point.coordinates[0],
  longitude: point.coordinates[1],
} : null);

export class Location {

    @IsOptional()
    @IsNumber()
    public readonly longitude: number;

    @IsOptional()
    @IsNumber()
    public readonly latitude: number;

    constructor(payload: { longitude: string, latitude: string }) {
      this.longitude  = parseFloat(payload.longitude);
      this.latitude   = parseFloat(payload.latitude);
    }
}

export default Location;
