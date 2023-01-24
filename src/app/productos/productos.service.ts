import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Producto} from './producto';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlEndPoint : string = 'https://tiendajksbe.azurewebsites.net/api/administrar/productos'
  constructor(private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint).pipe(
      map((response) => response as Producto[])
    );
  }
}
