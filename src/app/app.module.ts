import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VentaService } from './ventas/venta.service';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ProductosService } from './productos/productos.service';

const routes:Routes=[
  {path: '', redirectTo: '/ventas', pathMatch:'full'},
  {path:'ventas', component:VentasComponent},
  {path:'productos', component:ProductosComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [VentaService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
