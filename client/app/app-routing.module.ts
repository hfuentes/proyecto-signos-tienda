import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './views/tienda/tienda.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
