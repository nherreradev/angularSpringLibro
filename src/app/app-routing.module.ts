import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibroComponent} from './libro/libro.component'
import { IndexComponent } from './index/index.component'
import { BuscarLibroPorIdComponent } from './buscar-libro-por-id/buscar-libro-por-id.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { AsignarImagenLibroComponent } from './asignar-imagen-libro/asignar-imagen-libro.component';
import { ActualizarLibroComponent } from './actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './eliminar-libro/eliminar-libro.component';





const routes: Routes = [
  

{path: 'inicio', component: IndexComponent},  
{path: 'libros', component: LibroComponent},
{path: 'buscarLibro', component: BuscarLibroPorIdComponent},
{path: 'crearLibro', component: CrearLibroComponent},
{path: 'imagenLibro', component: AsignarImagenLibroComponent},
{path: 'actualizarLibro', component: ActualizarLibroComponent},
{path: 'eliminarLibro', component: EliminarLibroComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
