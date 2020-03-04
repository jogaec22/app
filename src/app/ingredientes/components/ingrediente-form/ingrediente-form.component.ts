import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

import {IngredienteService} from 'src/app/ingredientes/ingrediente.service';
import {MedicamentoService} from 'src/app/medicamentos/medicamento.service';

import {Ingrediente} from 'src/app/ingredientes/ingrediente';

import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ingrediente-form',
  templateUrl: './ingrediente-form.component.html',
  styleUrls: ['./ingrediente-form.component.css']
})
export class IngredienteFormComponent implements OnInit {

	public model:Ingrediente;
   _medicamentosToSelect: any[];

  constructor(
  	private _ingredienteService: IngredienteService,
    private _medicamentoService: MedicamentoService,
  	private _router: Router,
  	private _activatedRoute: ActivatedRoute
  ) { 
    this._medicamentosToSelect = [{'label':'', 'value':''}];
  	this.model = new Ingrediente();
  }

  ngOnInit() {  
  	this._get();    
  }

  private _get(){
  	this._activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      if(!id) return;  

      this._ingredienteService.get(id).subscribe((res) =>{
        this.model = res;                 
      }, err=>{
        alert('Error al obtener ingrediente, contacte al administrador');
      });      
    });
  }

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key:  'name',
      type: 'input',
      templateOptions: {
        label: 'Nombre:',
        placeholder: 'Nombre Ingrediente',
        required: true,
      }
    },
    {
      key: 'medicamentoId',
      type: 'select',
      defaultValue: "",
      templateOptions: {
        label: 'Escoger medicamento',
        labelProp: "label",
        valueProp: "value",
        options: this._medicamentoService.getToSelectControl()
      }
    }
  ];

  async onSubmit() {
    if (!this.form.valid) return;

    let res = await this._ingredienteService.saveOrUpdate(this.model).toPromise().catch(
      err=>{
        this.model = null;
        alert('Ha ocurrido un error al guardar ingrediente, concate al administrador');
    });    
    if(res || this.model)
      this._router.navigate(['/ingredients']);  
  }  

}

