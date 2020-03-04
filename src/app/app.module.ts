import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { IngredienteListComponent } from './ingredientes/components/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingredientes/components/ingrediente-form/ingrediente-form.component';
import { MedicamentoListComponent } from './medicamentos/components/medicamento-list/medicamento-list.component';
import { MedicamentoFormComponent } from './medicamentos/components/medicamento-form/medicamento-form.component';
import { IngredienteDetalleComponent } from './ingredientes/components/ingrediente-detalle/ingrediente-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngredienteListComponent,
    IngredienteFormComponent,
    MedicamentoListComponent,
    MedicamentoFormComponent,
    IngredienteDetalleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
