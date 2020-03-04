import {Medicamento} from 'src/app/medicamentos/medicamento';

export class Ingrediente{
	_id?:string;
	name:string;
	medicamentoId?:string;
	medicamento?:Medicamento;
}