import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  formularioRegistro : FormGroup;
  newRegistro: Usuario = <Usuario>{};

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder) { 
                  this.formularioRegistro = fb.group({ 
                    'nombre' : new FormControl("", [Validators.required, 
                                                    Validators.minLength(3),
                                                    Validators.maxLength(20),
                    ]),
                    'apellido' : new FormControl("", [Validators.required,
                                                      Validators.minLength(3),
                                                      Validators.maxLength(20),
                    ]),
                    'telefono' : new FormControl("", [Validators.required,
                                                      Validators.min(99999999),
                                                      Validators.max(9999999999),
                    ]),
                    'correo' : new FormControl("", [Validators.required,
                                                    Validators.minLength(5),
                                                    Validators.maxLength(30),
                    ]),
                    'categoria' : new FormControl("", Validators.required),
                    'password': new FormControl("", [Validators.required,
                                                     Validators.minLength(8),
                                                     Validators.maxLength(16),
                    ]),
                    'confirmaPass': new FormControl("", [Validators.required,
                                                         Validators.minLength(8),
                                                         Validators.maxLength(16),
                    ])
                  })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header : 'Error..', 
        message: 'Debe ingresar todos los datos', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else{
      this.newRegistro.nomUsuario = form.nombre;
      this.newRegistro.apellidoUsuario = form.apellido;
      this.newRegistro.telefonoUsuario = form.telefono;
      this.newRegistro.correoUsuario = form.correo;
      this.newRegistro.categoriaUsuario = form.categoria;
      this.newRegistro.passUsuario = form.password; 
      this.newRegistro.repassUsuario = form.confirmaPass;
      this.registroService.addUsuario(this.newRegistro).then(dato =>{
        this.newRegistro = <Usuario>{};
        this.showToast('Usuario Creado con éxito!');
      })
    }//findelelse
    this.formularioRegistro.reset();
  }//findelmetodo


  async showToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }



  usuario={
    nombre:'',
    apellido:'',
    telefono:'',
    correo:'',
    categoria:'',
    password:'',
    password2:'',
  }


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}