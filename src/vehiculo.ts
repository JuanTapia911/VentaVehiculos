export class Vehiculo {
id: number;
marca: string;
linea: string;
referencia: string;
modelo: number;
kilometraje: number;
color: string;
imagen: string;

constructor(marca:string, linea:string, referencia:string, modelo:number,
     kilomentraje:number, color:string, imagen:string ) {
        this.marca=marca;
        this.linea=linea;
        this.referencia=referencia;
        this.modelo=modelo;
        this.kilometraje=kilomentraje;
        this.color=color;
        this.imagen=imagen;

}
}
