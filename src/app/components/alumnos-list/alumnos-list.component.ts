import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './../../services/alumnos.service';
import AlumnoModel from 'src/app/models/alumnos/alumno.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  alumnos: AlumnoModel[] = [];
  sumatoria: number = 0;
  constructor(private service:AlumnosService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadAllAlumnos()
  }

  loadAllAlumnos(): void {
    this.service.readAlumnos().subscribe((resp: AlumnoModel[]) => {
      this.alumnos = resp;
      for (let alumno of this.alumnos) {
        if (alumno.materias.length > 0) {
          this.promediar(alumno)
        }
      }
    })
  }

  promediar(alumno: AlumnoModel){
    let sumatoria = 0;
    console.log('materias',alumno.materias);
    alumno.materias.map(materia => {
      console.log('enmapMateria',materia);
      console.log('enmapMateriaNota',materia.nota);
      sumatoria = materia.nota + sumatoria;
    })
    alumno.promedio = sumatoria/alumno.materias.length
    console.log('sumatoria',sumatoria);
    console.log('materiaslength',alumno.materias.length);
    console.log('promedio',alumno.promedio);
  }

  delete(id: any) {
    Swal.fire({
      title:"Confirmacion",
      text:"Esta seguro que desea eliminar?",
      icon:"warning",
      showCancelButton:true,
      showConfirmButton:true
    }).then((resp)=>{
      if (resp.isConfirmed){
        this.service.deleteAlumnos(id).subscribe(()=>{
          this.service.readAlumnos().subscribe((resp: AlumnoModel[])=>{
            this.alumnos = resp;
          })
        })
      }
    })
  }

}
