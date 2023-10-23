import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetdatosService } from '../../services/getdatos.service';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
})
export class HomeprofesorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  public getNombreDocente(){
    return GetdatosService.Usuario;
  }

}
