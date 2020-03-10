import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {

  constructor(private datosServicio: DatosService) {}

  onUpdate(){
    this.datosServicio.actualizarLibro().subscribe();
  }

  ngOnInit(): void {
  }

}
