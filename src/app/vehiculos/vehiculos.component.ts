import { Component, OnInit } from '@angular/core';
import { Vehiculo, Marcas } from '../../vehiculo';
import { dataVehiculos } from '../../dataVehiculos';
import { VehiculosService } from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos:Array<Vehiculo> = [];
  contadorMarcas: Marcas[] = [];
  
  constructor(private vehiculosService:VehiculosService) { }
  getVehiculosList() {
    this.vehiculosService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos=vehiculos;
      this.contadorMarcas = this.contarMarcas();
    });
  }
  contarMarcas(): Marcas[] {
    const contadorMarcas: Marcas[] = [];

    for (const vehiculo of this.vehiculos) {
        const marcaExistente = contadorMarcas.find(m => m.name === vehiculo.marca);
        
        if (marcaExistente) {
            marcaExistente.cuenta++;
        } else {
          contadorMarcas.push(new Marcas(vehiculo.marca)); 
        }
    }
    return contadorMarcas;
 }
  ngOnInit() {
    this.getVehiculosList();
  }

}
