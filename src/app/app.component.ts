import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage'

interface Componentes{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  router: any;
  constructor() {}


  componentes: Componentes[] = [ 

    {
      icon: 'people-circle-outline',
      name: 'Quienes Somos',
      redirecTo:'/quienessomos',
    },
    {
      icon: 'pulse-outline',
      name: 'Ultimos Sismos',
      redirecTo: '/feriados',
    },
    {
      icon: 'log-out-outline',
      name: 'Logout',
      redirecTo: '/inicio',
    },
    
    
  ];


  public logout() {
    localStorage.setItem('ingresado', 'false');
    this.router.navigate(['/inicio']);
  }

}
