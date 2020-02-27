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

  obtenerDatosTodosLosLibros(){
    /* esto esta recibiendo un arreglo de publicaciones */
    return this.clienteHttp.get<post[]>('http://localhost:8080/libros');
  }

 
  
  
  encontrarLibroPorId(valorInput:String){
    
    return this.clienteHttp.get<post>('http://localhost:8080/buscarLibro/' + valorInput);
 
  }
  

}
