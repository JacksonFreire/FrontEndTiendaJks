import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Venta } from './venta';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlEndPoint: string = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]>{
    return this.http.get<Venta[]>(this.urlEndPoint).pipe(
      map((response) => response as Venta[])
    );
  }
//Prova
}
