import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import AlumnoModel from '../models/alumnos/alumno.model';

const URL_API = "http://localhost:3000/alumnos"
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http:HttpClient) { }

  singleAlumno(id: number):Observable<AlumnoModel>{
    return this.http.get<AlumnoModel>(URL_API.concat('/'+id));
  }
  
  createAlumnos(newAlumno: AlumnoModel):Observable<any> {
    return this.http.post(URL_API,newAlumno);
  }
  
  readAlumnos():Observable<AlumnoModel[]>{
    return this.http.get<AlumnoModel[]>(URL_API);
  }

  updateAlumnos(alumno: AlumnoModel): Observable<any> {
    return this.http.put(URL_API.concat('/'+alumno.id), alumno);
  }

  deleteAlumnos(id: number | undefined): Observable<any> {
    return this.http.delete(URL_API.concat('/'+id));
  }

}
