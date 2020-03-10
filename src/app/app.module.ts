import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';

/* servicio http */
import { DatosService }  from './datos.service'
/* modulo http */
import {HttpClientModule} from '@angular/common/http';
import { LibroComponent } from './libro/libro.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { IndexComponent } from './index/index.component';
import { BuscarLibroPorIdComponent } from './buscar-libro-por-id/buscar-libro-por-id.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';

import { AsignarImagenLibroComponent } from './asignar-imagen-libro/asignar-imagen-libro.component'

/* 1 */
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizarLibroComponent } from './actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './eliminar-libro/eliminar-libro.component';

  


@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    EncabezadoComponent,
    PieComponent,
    IndexComponent,
    BuscarLibroPorIdComponent,
    CrearLibroComponent,
    AsignarImagenLibroComponent,
    ActualizarLibroComponent,
    EliminarLibroComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
 
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
