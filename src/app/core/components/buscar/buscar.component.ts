import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  @Output() buscar: EventEmitter<string[]> = new EventEmitter();

  ciudad: string = '418440';

  hoy: Date = new Date();
  datos: any;
  datosHoy: {};
  iconoHoy: string;


  datosProximosDias: string[] = [];
  iconos: string[] = [];

  clima: string;

  mostrarInfo: boolean = true;
  mostrarBusqueda: boolean = false;


  constructor(private weather: WeatherService) {


  }


  onBuscar(ciudad: string = this.ciudad) {

    this.weather.getLocalizacion(ciudad).subscribe(
      resp => {
        this.datos = resp;
        this.buscar.emit(this.datos);
      },
      (error) => {
        this.buscar.emit(['error']);        
      });

  }

}
