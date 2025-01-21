import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

// Decorador del componente que define el nombre del selector y la ruta del archivo HTML
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Clase del componente 
export class AppComponent {
  posts: any[] = []; // Array de cualquier tipo de datos que almacena los posts

  // Constructor que inyecta el servicio de datos (DataService)
  constructor(private servicio: DataService) { }

  // Metodo que se ejecuta al iniciar el componente y obtiene los posts del servicio
  ngOnInit() {
    this.servicio.getPosts().subscribe((data: any[]) => { // Se suscribe al observable que retorna el servicio
      this.posts = data; // Asigna los datos obtenidos al array de posts
      console.log(this.posts);
    });
  }

}
