import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosPorIngredienteComponent } from './platillos-por-ingrediente.component';

describe('PlatillosPorIngredienteComponent', () => {
  let component: PlatillosPorIngredienteComponent;
  let fixture: ComponentFixture<PlatillosPorIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosPorIngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosPorIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
