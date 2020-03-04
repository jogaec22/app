import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { IngredienteListComponent } from './ingredientes/components/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingredientes/components/ingrediente-form/ingrediente-form.component';

import { MedicamentoListComponent } from './medicamentos/components/medicamento-list/medicamento-list.component';
import { MedicamentoFormComponent } from './medicamentos/components/medicamento-form/medicamento-form.component';

const routes: Routes = [
	{path: '', component: InicioComponent},
	
	{path: 'ingredients', component: IngredienteListComponent},
	{path: 'ingredients/create', component: IngredienteFormComponent},
	{path: 'ingredients/edit/:id', component: IngredienteFormComponent},
	
	{path: 'medicamentos', component: MedicamentoListComponent},
	{path: 'medicamentos/create', component: MedicamentoFormComponent},
	{path: 'medicamentos/edit/:id', component: MedicamentoFormComponent},
	
	{path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
