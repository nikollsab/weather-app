import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  estaCargando = false;

  ciudad: string = '3936456';

  hoy: Date = new Date();

  datosHoy: {};
  datosProximosDias: string[] = [];

  icono: string;
  clima: string;
  titulo: string;
  pais: string;


  iconos: string[] = [];

  mostrarInfo: boolean = true;
  mostrarBusqueda: boolean = false;

  mostrarError: boolean = false;
  ImageSource: any;
  base: any;

  constructor(private weather: WeatherService, private sanitizer: DomSanitizer) {

    this.buscar();

  }

  buscar(ciudad: string = this.ciudad) {
    this.datosHoy = '';
    this.weather.getLocalizacionPorId(ciudad).subscribe(
      (resp) => {

        console.log(resp);
        this.estaCargando = false;
        this.iconos = [];
        this.datosHoy = resp;
        this.titulo = resp['name'];
        this.pais = resp['sys']['country'];

        this.iconos.push(this.datosHoy['weather'][0]['description']);

        var cadena = this.iconos[0];
        var filtroNube = "nub";
        var filtroLluvia = "lluv";
        var filtroLlovizna = "llov";
        var filtroCieloClaro = "cie";

        var indexNube = cadena.indexOf(filtroNube);
        var indexLluvia = cadena.indexOf(filtroLluvia);
        var indexLlovizna = cadena.indexOf(filtroLlovizna);
        var indexCieloClaro = cadena.indexOf(filtroCieloClaro);

        if (indexNube >= 0) {
          this.icono = 'fas fa-cloud-meatball';
        } else if (indexLluvia >= 0) {
          this.icono = 'fas fa-cloud-rain';
        } else if (indexLlovizna >= 0) {
          this.icono = 'fas fa-cloud-showers-heavy';
        } else if (indexCieloClaro >= 0) {
          this.icono = 'fas fa-cloud-sun';
        }
        else {
          console.log("la palabra no existe dentro de la cadena");
        }

      }
    );

    this.estaCargando = true;

  }


  // Busqueda mediante el input
  buscarPorNombre(ciudad: string) {

    if (ciudad == 'error') {
      this.mostrarError = true;
    } else {
      this.buscar(ciudad['id'].toString());
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
