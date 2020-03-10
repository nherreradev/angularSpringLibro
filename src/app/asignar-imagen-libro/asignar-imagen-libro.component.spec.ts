import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarImagenLibroComponent } from './asignar-imagen-libro.component';

describe('AsignarImagenLibroComponent', () => {
  let component: AsignarImagenLibroComponent;
  let fixture: ComponentFixture<AsignarImagenLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarImagenLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarImagenLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
