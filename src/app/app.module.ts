import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ListarReservaComponent } from './reserva/listar-reserva/listar-reserva.component';
import { HomeComponent } from './home/home.component';
import { NuevaReservaComponent } from './reserva/nueva-reserva/nueva-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarReservaComponent,
    HomeComponent,
    NuevaReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
