export class CiudadModel {
  city: string;
  temp: number;
  cord: CoordenadasModel;
  hora: string;
}

export class CoordenadasModel {
  lat: number;
  lon: number;
}