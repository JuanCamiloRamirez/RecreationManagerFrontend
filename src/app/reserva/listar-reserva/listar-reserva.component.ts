import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  reservas: Array<any> = [];

  constructor(
    private reservaService:ReservaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(){
    this.reservaService.reservas().subscribe(
      data =>{
        this.reservas=data;
        console.log(data);
      },
      err =>{
        console.log(err.error);   
      }
    );
  }

}
