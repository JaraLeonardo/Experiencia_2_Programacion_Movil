import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { GetdatosService } from '../../services/getdatos.service';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController, 
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                  this.formularioLogin = this.fb.group({
                    'correo' : new FormControl("", [Validators.required,
                                                    Validators.minLength(5),
                                                    Validators.maxLength(30),
                    ]),
                    'password': new FormControl("", [Validators.required,
                                                    Validators.minLength(8),
                                                    Validators.maxLength(16),
                    ]),
                  })
              }

  ngOnInit() {
  }

  //busca el correo y password en el storage  
  async Ingresar() {
    try {
      const f = this.formularioLogin.value;
      const usuarios = await this.registroService.getUsuarios();
      
      if (!usuarios || usuarios.length === 0) {
        // No se encontraron usuarios
        this.alertMsg();
        return;
      }
      
      const usuarioEncontrado = usuarios.find(user => user.correoUsuario === f.correo && user.passUsuario === f.password);
      
      if (usuarioEncontrado) {
        console.log('ingresadoalumno');
        localStorage.setItem('ingresadoalumno', 'true');
        this.navController.navigateRoot('homealumno');
        GetdatosService.Usuario = usuarioEncontrado.nomUsuario;
      } else {
        // Usuario no encontrado
        this.alertMsg();
      }
    } catch (error) {
      console.error('Error al obtener datos de usuarios:', error);
    }
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: '¡El usuario ingresado no existe',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }//findelmetodo

  usuario={
    nombre:'',
    password:'',
    email:'',
  }


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}