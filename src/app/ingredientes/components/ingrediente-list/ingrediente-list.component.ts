import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {IngredienteService} from 'src/app/ingredientes/ingrediente.service';
import {Ingrediente} from 'src/app/ingredientes/ingrediente';

import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {
  public ingredientes;
  public message: string;
  public ingrediente: Ingrediente;

  constructor(
  	private _ingredienteService: IngredienteService
  ) { 
    this.message = "Cargando datos ...";
  }

  ngOnInit() {
  	this._getAll();     
  }

  private async _getAll(){    
    this.ingredientes = await this._ingredienteService.getAll().toPromise().catch( 
      err=>{
        this.message = "No se lograron obtener los Ingredientes, contacte al administrador";
    });
    if(this.ingredientes && this.ingredientes.length == 0)
      this.message = 'No existen ingredientes registrados'; 
    console.log('ingredientes es', this.ingredientes);    
  }

  public delete(id){
    this._ingredienteService.delete(id).toPromise().then(res =>{
      this._getAll();
    }).catch(err=>{
      alert('Error al eliminar Ingrediente, contacte con el administrador');
    });
  }

  public verDetalle(ing){
    this.ingrediente = ing;
    console.log('ver detalles', ing);
  }

  public ocultarDetalle(){
    this.ingrediente = null;
  }
}
