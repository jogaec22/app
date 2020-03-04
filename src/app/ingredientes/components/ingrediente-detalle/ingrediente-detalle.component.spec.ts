import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteDetalleComponent } from './ingrediente-detalle.component';

describe('IngredienteDetalleComponent', () => {
  let component: IngredienteDetalleComponent;
  let fixture: ComponentFixture<IngredienteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
