import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {Ingrediente} from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

	private urlApi: string = 'http://localhost:3000/ingredients';

  constructor(
  	private _http: HttpClient
  ) { }


  /*
    Method to obtain all the ingredients, with the filter to include the relation to obtain the associated medications.
  */
  public getAll(): Observable<Ingrediente[]> {    
  	return this._http.get<Ingrediente[]>(this.urlApi+'?filter[include][][relation]=medicamento');
  }

  public get(id): Observable<Ingrediente> {
  	return this._http.get<Ingrediente>(this.urlApi+"/"+id);
  }

  
  /*
    Method to create or update a ingredient, for this it is verified that if there is _id in the 
    model to persist then it will be updated, otherwise it will be created.
  */
  public saveOrUpdate(ingrediente: Ingrediente): Observable<Ingrediente> {
  	if (ingrediente._id){
  		return this._http.put<Ingrediente>(this.urlApi+'/'+ingrediente._id, ingrediente);
  	}
  	return this._http.post<Ingrediente>(this.urlApi, ingrediente);
  }

  public delete(id): Observable<Ingrediente>{
  	return this._http.delete<Ingrediente>(this.urlApi+"/"+id);
  }  
}
