import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  constructor(private datosServicio: DatosService) { }

 

  

  crearLibroMetodoComponente(){


    this.datosServicio.crearLibro().subscribe();
  }

  ngOnInit(): void {
  }

}
