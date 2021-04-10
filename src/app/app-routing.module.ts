import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarReservaComponent } from './reserva/listar-reserva/listar-reserva.component';
import { NuevaReservaComponent } from './reserva/nueva-reserva/nueva-reserva.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reservas',component:ListarReservaComponent},
  {path:'nueva',component:NuevaReservaComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
