import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos:Array<Vehiculo> = [];
  constructor() { }

  ngOnInit() {
  }

}
