import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {

  public static buildRequestURL(host: string, prefix: string = 'api/client') {
    return `${host}/${prefix}`;
  }

}