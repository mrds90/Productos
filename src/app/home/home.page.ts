import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos;
  private carrito: Array<Producto>;
  private cantidad = 0;
  
  constructor(private prodSrv: ProductoService) {
    prodSrv.obtenerTodos().subscribe(datos => {
      this.productos = datos;
     });
    this.carrito = prodSrv.getCarrito();
   };

  }

