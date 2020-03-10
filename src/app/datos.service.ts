import { Injectable } from '@angular/core';
/* me permite hacer peticiones http desde */
import {HttpClient} from '@angular/common/http';
import {post} from './post';
import * as $ from 'jquery';





@Injectable({
  providedIn: 'root'
})

/* esta clase que exporto la tengo que importar en modules en providers */
export class DatosService {

 

  constructor(private clienteHttp: HttpClient) {}

    eliminarLibro(valorInput:string){
      
      return this.clienteHttp.delete('http://localhost:8080/libro/eliminar/' + valorInput);

    }
  
    actualizarLibro(){

    var valorInputNombre = $(".nombreLibroActualizar").val().toString();
    var valorInputAutor = $(".nombreAutorActualizar").val().toString();
    var valorIdActualizar = $(".idLibroActualizar").val().toString();

     var datosAEnviar = {
      nombre: valorInputNombre,
      autor: valorInputAutor,
      
    }

    return this.clienteHttp.patch('http://localhost:8080/libro/actualizar/' + valorIdActualizar, datosAEnviar);
  }


  asignarImagenALibro(idLibro: String){

    return this.clienteHttp.post('http://localhost:8080/libro/imagen', idLibro );
  }
   

  crearLibro(){

    var valorInputNombre = $(".nombre").val().toString();
    var valorInputAutor = $(".autor").val().toString();

     var datosAEnviar = {
      nombre: valorInputNombre,
      autor: valorInputAutor
    }

    return this.clienteHttp.post('http://localhost:8080/crearLibro', datosAEnviar);
  }


  obtenerDatosTodosLosLibros(){
    /* esto esta recibiendo un arreglo de publicaciones */
    return this.clienteHttp.get<post[]>('http://localhost:8080/libros');
  }

 
  
  
  encontrarLibroPorId(valorInput:String){
    
    return this.clienteHttp.get<post>('http://localhost:8080/libros/' + valorInput);
 
  }
  

}
