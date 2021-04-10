export class Reserva {
    idReserva?: number;
    nombre: string;
    apellido: string;
    nroDocumento: number;
    inicioFecha: string;
    finFecha: string;
    alojamiento: string;

    constructor(nombre:string,apellido:string,nroDocumento: number,
        inicioFecha: string,finFecha: string,alojamiento: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.nroDocumento=nroDocumento;
        this.inicioFecha=inicioFecha;
        this.finFecha=finFecha;
        this.alojamiento=alojamiento;
    }
}
