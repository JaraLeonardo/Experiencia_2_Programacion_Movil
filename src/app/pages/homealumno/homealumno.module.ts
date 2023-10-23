import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomealumnoPageRoutingModule } from './homealumno-routing.module';

import { HomealumnoPage } from './homealumno.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomealumnoPageRoutingModule
  ],
  declarations: [HomealumnoPage]
})
export class HomealumnoPageModule {}
