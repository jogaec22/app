import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {Medicamento} from './medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

	private urlApi: string = 'http://localhost:3000/medicamentos';

  constructor(
  	private _http: HttpClient
  ) { }


  public getAll(): Observable<Medicamento[]> {
  	return this._http.get<Medicamento[]>(this.urlApi);
  }

  public get(id): Observable<Medicamento> {
  	return this._http.get<Medicamento>(this.urlApi+"/"+id);
  }

  /*
    Method to create or update a medication, for this it is verified that if there is _id in the 
    model to persist then it will be updated, otherwise it will be created.
  */
  public saveOrUpdate(medicamento: Medicamento): Observable<Medicamento> {
  	if (medicamento._id){
  		return this._http.put<Medicamento>(this.urlApi+'/'+medicamento._id, medicamento);
  	}
  	return this._http.post<Medicamento>(this.urlApi, medicamento);
  }

  public delete(id): Observable<Medicamento>{
  	return this._http.delete<Medicamento>(this.urlApi+"/"+id);
  }

  /*
    This method calls all available medications and through the pipe, using map operator we can 
    customize to return a json for each medication item, the json contains the label and value keys 
    with their respective values ​​to be used in the select field of the form of ingredients. 
    Returns an observable to be used in the formly configuration.
  */
  public getToSelectControl(){
  	return this.getAll().pipe( map( (res:any) =>{
  		if(!res) return [];
  		return res.map( (item) =>{  			
  			return {
  				'label': item.name, 'value': item._id
  			}
		})
  	}));  	
  }
}
