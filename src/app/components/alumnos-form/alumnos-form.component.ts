import { Router } from '@angular/router';
import { AlumnosService } from './../../services/alumnos.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import AlumnoModel from 'src/app/models/alumnos/alumno.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import MateriasModel from 'src/app/models/materias/materias.model';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {

  alumnos: AlumnoModel[] = [];
  materiasModel: MateriasModel[] = [];  
  form: FormGroup;

  @Output()
  submit: EventEmitter<AlumnoModel> = new EventEmitter();

  constructor(
    private service: AlumnosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) 
  { 
    this.form = formBuilder.group({
      id: 0,
      nombre: "",
      apellido: "",
      dni: 0,
      direccion: "",
      grado: "",
      seccion: "",
      materias: this.formBuilder.array([])
    })
    this.form.get("nombre")?.addValidators(Validators.required);
    this.form.get("apellido")?.addValidators(Validators.required);
    this.form.get("dni")?.addValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
    this.form.get("direccion")?.addValidators(Validators.required);
    this.form.get("grado")?.addValidators(Validators.required);
    this.form.get("seccion")?.addValidators(Validators.required);
  }

  ngOnInit(): void {
  }

  get materias(){
    return this.form.get("materias") as FormArray;
  }
  public nombre_materia(index: any) { return ((this.form.get('materias') as FormArray).at(index) as FormGroup).get('nombre_materia'); }
  public nota(index: any) { return ((this.form.get('materias') as FormArray).at(index) as FormGroup).get('nota'); }


  newMateriaGroups(): FormGroup{
    return this.formBuilder.group({
      nombre_materia: this.formBuilder.control('', Validators.required),
      nota: this.formBuilder.control(0, Validators.required)
    })
  }

  addMateria(){
    this.materias.push(this.newMateriaGroups());
  }

  removeMateria(index: number){
    this.materias.removeAt(index);
  }

  formSubmit() {
    if (this.form.valid) {
      Swal.fire('Create Successfully!','El formulario se envio correctamente','success');
      this.submit.emit(this.form.value);
    } else {
      Swal.fire('Error','Complete coorrectamente los campos del formulario','error');
    }
  }

  cancelar() {
    this.router.navigate([""]);
  }

  show(alumno: AlumnoModel){
    console.log(alumno);

    this.form.patchValue(alumno);
  }

}
