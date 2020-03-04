import { Component, OnInit, Input } from '@angular/core';
import {Ingrediente} from 'src/app/ingredientes/ingrediente';

@Component({
  selector: 'app-ingrediente-detalle',
  templateUrl: './ingrediente-detalle.component.html',
  styleUrls: ['./ingrediente-detalle.component.css']
})
export class IngredienteDetalleComponent implements OnInit {

  @Input() ingrediente: Ingrediente;

  constructor() { }

  ngOnInit() {
  	console.log('ingrediente llegado al detalle', this.ingrediente);
  }

}
