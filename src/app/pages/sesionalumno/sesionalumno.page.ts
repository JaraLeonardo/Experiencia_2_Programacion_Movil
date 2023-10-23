import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesionalumno',
  templateUrl: './sesionalumno.page.html',
  styleUrls: ['./sesionalumno.page.scss'],
})
export class SesionalumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
