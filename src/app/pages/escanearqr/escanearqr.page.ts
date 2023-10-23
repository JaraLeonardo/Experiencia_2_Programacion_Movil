import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  constructor(private alertController:AlertController,
              private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'La asistencia se ha confirmado correctamente!',
      buttons: ['OK'],
    });
  
    await alert.present();
  }
}
