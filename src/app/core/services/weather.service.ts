import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl: string = 'https://www.metaweather.com/api';

  constructor( private http: HttpClient) { }


  getLocalizacion( nombre: string): Observable<any>{

    const url = `${this.apiUrl}/location/search/?query=${nombre}`
    return this.http.get<any>( url );
  }

  getLocalizacionPorId( id: string): Observable<any>{

    const url = `${this.apiUrl}/location/${id}`
    return this.http.get<any>( url );
  }

  getLocalizacionPorDia( id: string, fecha: string): Observable<any>{

    const url = `${this.apiUrl}/location/${id}/${fecha}`
    return this.http.get<any>( url );
  }

}
