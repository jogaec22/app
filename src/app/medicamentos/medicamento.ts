import {Ingrediente} from 'src/app/ingredientes/ingrediente';

export class Medicamento{
	_id?:string;
	name:string;
	posology:string;
	ingredients?:Ingrediente[];
	stock?:number;
	expiration_date:string;

	constructor(){
		this.stock = 0;
		this.expiration_date = '2020-03-04 06:38:12.920Z'
	}
}