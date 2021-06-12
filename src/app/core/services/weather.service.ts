import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private appid: string = 'c5f248cf6997639f517862cb5cfe8ba9';
  private units: string = 'metric';
  private lang: string = 'es';

  constructor( private http: HttpClient) { }


  getLocalizacion( nombre: string): Observable<any>{

    const url = `${this.apiUrl}?q=${nombre}&appid=${this.appid}&units=${this.units}&lang=${this.lang}`
    return this.http.get<any>( url );
  }

  getLocalizacionPorId( id: string): Observable<any>{

    const url = `${this.apiUrl}?id=${id}&appid=${this.appid}&units=${this.units}&lang=${this.lang}`
    return this.http.get<any>( url );
  }

}
