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

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
