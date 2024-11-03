import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Importar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

import { VehiculosService } from './vehiculos.service';
// Para el mock del servicio
import { of } from 'rxjs'; 

import { VehiculosComponent } from './vehiculos.component';
import { Vehiculo } from '../../vehiculo';


describe('Prueba Lista vehiculos', () => {
  /* atributos necesarios */
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  let debug: DebugElement;

  /* Mock del servicio */
  // Mockear la respuesta del servicio
  const mockServerService = {
    getVehiculos: () => of([
      {
        "id": 1,
        "marca": "Renault",
        "linea": "Kangoo",
        "referencia": "VU Express",
        "modelo": 2017,
        "kilometraje": 93272,
        "color": "Blanco",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
        },
        {
        "id": 2,
        "marca": "Chevrolet",
        "linea": "Spark",
        "referencia": "Life",
        "modelo": 2018,
        "kilometraje": 55926,
        "color": "Plata",
        "imagen": "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
        },
        {
        "id": 3,
        "marca": "Chevrolet",
        "linea": "Sail",
        "referencia": "LT Sedan",
        "modelo": 2016,
        "kilometraje": 94321,
        "color": "Rojo",
        "imagen": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png"
        },
    ])
  };

  /* Configuración del ambiente de pruebas */
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],  // Usar HttpClientTestingModule para evitar errores
      declarations: [ VehiculosComponent ],
      providers: [
        { provide: VehiculosService, useValue: mockServerService }  // Usar el mock del servicio
      ]
    })
    .compileComponents();
  }));

  /* Configuración del componente */
  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    component.vehiculos = [ ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  /* Pruebas */

  it('Probar que hay tres elementos en la tabla', async () => {

    fixture.detectChanges();

    // probando que hay tres filas en la tabla
    const filas = debug.queryAll(By.css('tbody tr'));
    expect(filas.length).toEqual(3);

    // Probando los encabezados de la tabla
    const headers = debug.queryAll(By.css('thead tr'));
    expect(headers.length).toEqual(1);

  });

});
