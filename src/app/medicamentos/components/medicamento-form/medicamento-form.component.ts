import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

import {MedicamentoService} from 'src/app/medicamentos/medicamento.service';
import {Medicamento} from 'src/app/medicamentos/medicamento';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
  styleUrls: ['./medicamento-form.component.css']
})
export class MedicamentoFormComponent implements OnInit {

	public model: Medicamento;

  constructor(
  	private _router: Router,
  	private _activatedRoute: ActivatedRoute,
  	private _medicamentoService: MedicamentoService
  ) { 
  	this.model = new Medicamento();
  }

  ngOnInit() {
  	this._get();
  }

  private _get(){
  	this._activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      if(!id) return;  

      this._medicamentoService.get(id).subscribe((res) =>{
      	console.log('res', res);
        this.model = res; 
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
        placeholder: 'Nombre Medicamento',
        required: true,
      }
    },
    {
      key:  'posology',
      type: 'input',
      templateOptions: {
        label: 'Posologia:',
        placeholder: 'Nombre Posologia',
        required: true,
      }
    },
    {
      key:  'stock',
      type: 'input',
      templateOptions: {
      	type: 'number',
        label: 'Stock:',
        placeholder: 'Stock',
        required: false,
      }
    },
    {
      key:  'expiration_date',
      type: 'input',
      templateOptions: {
        label: 'Fecha Expiración:',        
        placeholder: 'Fecha Expiración',
        required: true,
      }
    },
  ];

  onSubmit() {
  	console.log('model', this.model);
    if (!this.form.valid) return;

	this._medicamentoService.saveOrUpdate(this.model).subscribe(res=>{
		this._router.navigate(['/medicamentos']);
	}, err=>{
		console.log('err', err);
		alert('Ha ocurrido un error al guardar el medicamento, concate al administrador');
	});    
  }  
}
