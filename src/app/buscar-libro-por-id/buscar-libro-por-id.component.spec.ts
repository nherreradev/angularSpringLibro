import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibroPorIdComponent } from './buscar-libro-por-id.component';

describe('BuscarLibroPorIdComponent', () => {
  let component: BuscarLibroPorIdComponent;
  let fixture: ComponentFixture<BuscarLibroPorIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarLibroPorIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLibroPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
