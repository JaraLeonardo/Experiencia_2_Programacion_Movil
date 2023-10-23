import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionprofesorPage } from './sesionprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: SesionprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionprofesorPageRoutingModule {}
