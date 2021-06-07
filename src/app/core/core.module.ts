import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacadosComponent } from './pages/destacados/destacados.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    DestacadosComponent, 
    SidenavComponent, 
    BuscarComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    DestacadosComponent, 
    SidenavComponent, 
    BuscarComponent
  ]
})
export class CoreModule { }
