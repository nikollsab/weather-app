import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UiModule { }
