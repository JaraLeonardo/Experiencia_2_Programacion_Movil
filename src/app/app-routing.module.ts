import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoalumnoGuard } from './ingresadoalumno.guard';
import { IngresadoprofesorGuard } from './ingresadoprofesor.guard';
import { NoingresadoGuard } from './noingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'homeprofesor',
    loadChildren: () => import('./pages/homeprofesor/homeprofesor.module').then( m => m.HomeprofesorPageModule),
    

  },
  {
    path: 'homealumno',
    loadChildren: () => import('./pages/homealumno/homealumno.module').then( m => m.HomealumnoPageModule),
    
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
   
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),
   
  },
  {
    path: 'sesionalumno',
    loadChildren: () => import('./pages/sesionalumno/sesionalumno.module').then( m => m.SesionalumnoPageModule)
  },
  {
    path: 'sesionprofesor',
    loadChildren: () => import('./pages/sesionprofesor/sesionprofesor.module').then( m => m.SesionprofesorPageModule)
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('./pages/quienessomos/quienessomos.module').then( m => m.QuienessomosPageModule),
    
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    //canActivate: [NoingresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
