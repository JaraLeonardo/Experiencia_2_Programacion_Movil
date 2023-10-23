import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SesionprofesorPageRoutingModule } from './sesionprofesor-routing.module';
import { SesionprofesorPage } from './sesionprofesor.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SesionprofesorPageRoutingModule
  ],
  declarations: [SesionprofesorPage]
})
export class SesionprofesorPageModule {}
