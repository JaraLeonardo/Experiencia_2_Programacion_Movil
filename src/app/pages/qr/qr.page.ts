import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'La asistencia se ha registrado correctamente!',
      buttons: ['OK'],
    });
  
    await alert.present();
  }
}
