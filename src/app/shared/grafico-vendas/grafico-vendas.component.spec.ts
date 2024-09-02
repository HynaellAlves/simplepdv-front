import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVendasComponent } from './grafico-vendas.component';

describe('GraficoVendasComponent', () => {
  let component: GraficoVendasComponent;
  let fixture: ComponentFixture<GraficoVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
