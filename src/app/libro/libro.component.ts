import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  post = [];

  constructor(private datosService: DatosService){
    /*subscribe() nos trae los datos */
    
    this.datosService.obtenerDatosTodosLosLibros().subscribe(datos =>{ 
    
     this.post = datos;
    
    } );
  }

  ngOnInit(): void {
  }

}
