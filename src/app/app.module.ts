import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosCreateComponent } from './components/alumnos-create/alumnos-create.component';
import { AlumnosUpdateComponent } from './components/alumnos-update/alumnos-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    AlumnosFormComponent,
    AlumnosCreateComponent,
    AlumnosUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
