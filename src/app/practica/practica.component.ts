import { Component } from '@angular/core';
import { ServicioPracticaService } from '../servicio-practica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor], // No importar HttpClient poque está en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  datos: any[] = []; // Array de cualquier tipo de datos que almacena los datos

  // Constructor que inyecta el servicio de datos (ServicioPracticaService)
  constructor(private servicio: ServicioPracticaService) { }

  // Metodo que se ejecuta al iniciar el componente y obtiene los datos del servicio
  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos) => {
        this.datos = datos; // renderiza y pinta en el template HTML
        console.log(this.datos);
      });
  }

}
