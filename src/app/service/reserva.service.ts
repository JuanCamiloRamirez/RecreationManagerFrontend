import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';


@Injectable({
  providedIn: 'root'
})
export class ReservaService { 

  reservaURL='http://localhost:8080/reserva/';

  constructor(private httpReserva:HttpClient) { }

  public reservas():Observable<Reserva[]>{
    return this.httpReserva.get<Reserva[]>(this.reservaURL+'all');
  }

  public reserva(idReserva:number):Observable<Reserva>{
    return this.httpReserva.get<Reserva>(this.reservaURL+`by/${idReserva}`);
  }

  public save(reserva:Reserva):Observable<Reserva>{
    return this.httpReserva.post<any>(this.reservaURL+'save',reserva);
  }
}