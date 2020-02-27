import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibroComponent} from './libro/libro.component'
import { IndexComponent } from './index/index.component'
import { BuscarLibroPorIdComponent } from './buscar-libro-por-id/buscar-libro-por-id.component';





const routes: Routes = [

{path: 'inicio', component: IndexComponent},  
{path: 'libros', component: LibroComponent},
{path: 'buscarLibro', component: BuscarLibroPorIdComponent},
{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: '**', redirectTo: 'inicio', pathMatch: 'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
