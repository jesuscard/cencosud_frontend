import { Injectable } from "@angular/core";
import { HttpService } from './http.service';

import { Socket } from 'ngx-socket-io';
import { Message } from '../models/mensaje.model'


@Injectable()
export class CiudadService {

  private URL: string;

  constructor(private httpService: HttpService, private socket: Socket) { }

   public getDataCities() {
    this.URL = 'http://localhost:3000/infoCiudades'
    return this.httpService.get<any>(this.URL);
  }

}
