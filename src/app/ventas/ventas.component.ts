import { Component } from '@angular/core';
import { Venta } from './venta';
import { VentaService } from './venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html'
})
export class VentasComponent {

  ventas: Venta[];

  constructor(private ventaService: VentaService){}

  ngOnInit(){
/*
    this.ventaService.getVentas().subscribe(
       ventas => this.ventas = ventas 
    );
*/

  }

}
