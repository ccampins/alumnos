import { AlumnosUpdateComponent } from './components/alumnos-update/alumnos-update.component';
import { AlumnosCreateComponent } from './components/alumnos-create/alumnos-create.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AlumnosListComponent},
  {path: 'create', component: AlumnosCreateComponent},
  {path: 'update/:id', component: AlumnosUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
