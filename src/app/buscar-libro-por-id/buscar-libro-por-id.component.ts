import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { post } from '../post';



 

@Component({
  selector: 'app-buscar-libro-por-id',
  templateUrl: './buscar-libro-por-id.component.html',
  styleUrls: ['./buscar-libro-por-id.component.css']
})


export class BuscarLibroPorIdComponent implements OnInit {

  

  libro: post;

  

  constructor(private datosServicio: DatosService) { }



  traerDatos(){
    
      var valorInput = $(".valorInput").val().toString();

      this.datosServicio.encontrarLibroPorId(valorInput).subscribe(datos =>{ 
    
      this.libro = datos;
     
     } );
  }

  

  

  ngOnInit(): void {
  }

}



