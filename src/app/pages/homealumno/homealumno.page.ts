import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetdatosService } from '../../services/getdatos.service';

@Component({
  selector: 'app-homealumno',
  templateUrl: './homealumno.page.html',
  styleUrls: ['./homealumno.page.scss'],
})
export class HomealumnoPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  public getNombre(){
    return GetdatosService.Usuario;
  }
        
}
