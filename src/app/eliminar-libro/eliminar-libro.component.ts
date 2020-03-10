import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html',
  styleUrls: ['./eliminar-libro.component.css']
})
export class EliminarLibroComponent implements OnInit {

  constructor(private datosServicio: DatosService) { }

  

  eliminarLibroComponente(){

    var valorInput = $(".valorInput").val().toString();

    this.datosServicio.eliminarLibro(valorInput).subscribe()

  }

  ngOnInit(): void {
  }

}
