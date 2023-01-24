import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Producto[];
  constructor( private productoService: ProductosService ){}

ngOnInit(){
  this.productoService.getProductos().subscribe(
    productos => this.productos= productos
  )
}

}


