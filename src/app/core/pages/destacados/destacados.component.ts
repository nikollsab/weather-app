import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss'],
  providers: [ DatePipe ]
})
export class DestacadosComponent {

  @Input() datosHoy: {};
  @Input() datosProximosDias: string[] = [];
  @Input() iconos: string[];
  @Input() titulo: string;


  datos(){

  }

}
