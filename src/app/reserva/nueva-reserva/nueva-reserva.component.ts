import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {

    nombre ='';
    apellido='';
    nroDocumento: number = 0;
    inicioFecha='';
    finFecha='';
    alojamiento='';

  constructor(private reservaService:ReservaService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const reserva= new Reserva(this.nombre,this.apellido,this.nroDocumento,
      this.inicioFecha,this.finFecha,this.alojamiento);
      this.reservaService.save(reserva).subscribe(
        data=>{
          this.toastr.success('Reserva creada', 'Ok',{
            timeOut: 3000
          });
          this.router.navigate(['/'])
        },
        err=>{
          this.toastr.error(err.error.message, 'Fail',{
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.router.navigate(['/'])
        }
      )
  }
}
