import { Router } from '@angular/router';
import { AlumnosService } from './../../services/alumnos.service';
import { Component, OnInit } from '@angular/core';
import AlumnoModel from 'src/app/models/alumnos/alumno.model';

@Component({
  selector: 'app-alumnos-create',
  templateUrl: './alumnos-create.component.html',
  styles: [
  ]
})
export class AlumnosCreateComponent implements OnInit {

  constructor(
    private service: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(alumnos: AlumnoModel){
    this.service.createAlumnos(alumnos).subscribe(resp => {
      this.router.navigate([""]);
    })
  }

}
