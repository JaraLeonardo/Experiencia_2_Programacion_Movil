import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlumno } from '../interfaces/ialumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.page.html',
  styleUrls: ['./agregar-alumnos.page.scss'],
})
export class AgregarAlumnosPage implements OnInit {

  newAlumno: IAlumno = {
    nombre: "", 
    seccion: "",
    fecha:""
  }

  constructor(private alumnoService: AlumnosService, 
              private router: Router) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.alumnoService.crearAlumno(this.newAlumno).subscribe();
    this.router.navigateByUrl("/listar-alumnos");
  }

}