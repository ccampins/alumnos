import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './../../services/alumnos.service';
import { AlumnosFormComponent } from './../alumnos-form/alumnos-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import AlumnoModel from 'src/app/models/alumnos/alumno.model';

@Component({
  selector: 'app-alumnos-update',
  templateUrl: './alumnos-update.component.html',
  styles: [
  ]
})
export class AlumnosUpdateComponent implements OnInit {

  @ViewChild(AlumnosFormComponent)
  form!: AlumnosFormComponent;

  constructor(
    private service: AlumnosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      let id = params.id;
      this.service.singleAlumno(id).subscribe((alum:AlumnoModel) => {
        this.editmateria = alum;
        if(this.editmateria.materias.length!=null){
          for (let index = 0; index < this.editmateria.materias.length; index++) {
            this.form.addMateria();
          }
        }
        this.form.show(alum);
      })
    })
  }

  formMateria!: FormArray;
  editmateria: any;

  update(alumno: AlumnoModel){
    this.service.updateAlumnos(alumno).subscribe(()=> {
      this.router.navigate([""]);
    })
  }

}
