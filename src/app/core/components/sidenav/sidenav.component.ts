import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ciudad: string = '418440';

  hoy: Date = new Date();

  datosHoy: {};
  datosProximosDias: string[] = [];

  iconoHoy: string;
  clima: string;
  titulo: string;


  iconos: string[] = [];

  mostrarInfo: boolean = true;
  mostrarBusqueda: boolean = false;

  mostrarError: boolean = false;



  constructor(private weather: WeatherService) {

    this.buscar();

  }

  buscar(ciudad: string = this.ciudad) {
    this.datosHoy = '';
    this.weather.getLocalizacionPorId(ciudad).subscribe(
      resp => {

        this.iconos = [];
        this.datosProximosDias = resp['consolidated_weather'];
        this.datosHoy = this.datosProximosDias.shift();
        this.titulo = resp['title'];

        let temperaturaHoy: string = this.datosHoy['weather_state_abbr'];

        if (temperaturaHoy === 'lc') {
          this.iconos.push('fas fa-cloud-sun');
        }
        else if (temperaturaHoy === 'hc' ){
          this.iconos.push('fas fa-cloud-meatball');
        } else if (temperaturaHoy === 'lr' ){
          this.iconos.push('fas fa-cloud-sun-rain');
        } 
        else if (temperaturaHoy === 'hr' ){
          this.iconos.push('fas fa-cloud-showers-heavy');
        }         
        else if (temperaturaHoy === 's') {
          this.iconos.push('fas fa-cloud-rain');
        }else if (temperaturaHoy === 'c') {
          this.iconos.push('fas fa-cloud');
        }

        for (const data of this.datosProximosDias) {

          let temperatura: string = data['weather_state_abbr'];

          if (temperatura === 'lc') {
            this.iconos.push('fas fa-cloud-sun');
          }
          else if (temperatura === 'hc' ){
            this.iconos.push('fas fa-cloud-meatball');
          } else if (temperatura === 'lr' ){
            this.iconos.push('fas fa-cloud-sun-rain');
          } 
          else if (temperatura === 'hr' ){
            this.iconos.push('fas fa-cloud-showers-heavy');
          }         
          else if (temperatura === 's') {
            this.iconos.push('fas fa-cloud-rain');
          }  else if (temperatura === 'c') {
            this.iconos.push('fas fa-cloud');
          }

        }
      }
    );

  }


  // Busqueda mediante el input
  buscarPorNombre(ciudad: string) {
    
    if (ciudad == undefined) {
      this.mostrarError = true;
    } else {
      this.buscar(ciudad['woeid'].toString());
      this.mostrarError = false;
    }

  }

  buscarBoton() {

    this.mostrarBusqueda = true;
    this.mostrarInfo = false;

  }

  cerrarBusqueda() {
    this.mostrarBusqueda = false;
    this.mostrarInfo = true;
    this.mostrarError = false;
  }

}
