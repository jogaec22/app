import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MedicamentoService} from 'src/app/medicamentos/medicamento.service';
import {Medicamento} from 'src/app/medicamentos/medicamento';

@Component({
  selector: 'app-medicamento-list',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

  public medicamentos: Medicamento[];
  public message: string;

  constructor(
  	private _medicamentoService: MedicamentoService
  ) { 
  	this.message = "Cargando datos ...";
  }

  ngOnInit() {
  	this._getAll();  	
  }

  private _getAll(){
  	this._medicamentoService.getAll().subscribe( res=>{
  		this.medicamentos = res;
  		this.message = !res || res.length == 0 ? 'No existen medicamentos registrados' : null;
  	}, err=>{
  		this.message = "No se lograron obtener los medicamentos, contacte al administrador";
  		alert("Error al obtener listado de Medicamentos, contacte con el administrador");
  	});
  }

  public delete(id){
    this._medicamentoService.delete(id).subscribe(
      res =>{
        this._getAll();
      },err=>{
        alert('Error al eliminar medicamento, contacte con el administrador');
      }
    );
  }

  filtrar(val){
    this._medicamentoService.filterByName(val).subscribe( res=>{
      this.medicamentos = res;
      this.message = !res || res.length == 0 ? 'No existen medicamentos con el filtro proprocionado' : null;
    }, err=>{
      this.message = "No se lograron filtrar los medicamentos, contacte al administrador";
      alert("Error al obtener listado de Medicamentos con el filtro indicado, contacte con el administrador");
    });
  }

}
