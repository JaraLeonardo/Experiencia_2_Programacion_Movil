import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionalumnoPageRoutingModule } from './sesionalumno-routing.module';

import { SesionalumnoPage } from './sesionalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionalumnoPageRoutingModule
  ],
  declarations: [SesionalumnoPage]
})
export class SesionalumnoPageModule {}
