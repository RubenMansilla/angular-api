import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPracticaService {

  private endPoint: string = 'http://localhost:8080/api/datos' // Endpoint de Spring Boot
  private endPoint2: string = 'https://fakestoreapiserver.reactbd.com/photos'

  // Inyectar la dependencia HttpClient
  constructor(private http: HttpClient) { }

  // Método para obtener los datos del endpoint
  public getDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.endPoint2);
  }
}
