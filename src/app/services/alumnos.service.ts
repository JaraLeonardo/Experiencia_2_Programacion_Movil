import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlumnos } from '../pages/interfaces/ialumnos';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../pages/interfaces/ialumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }


  listarAlumnos():Observable<IAlumnos>{
    return this.http.get<IAlumnos>(`${environment.apiURL}/alumnos`)
  }


  crearAlumno(newAlumno: IAlumno):Observable<IAlumno>{
    return this.http.post<IAlumno>(`${environment.apiURL}/alumnos`,newAlumno)
  }

}