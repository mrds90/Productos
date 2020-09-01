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
  private cantidad;
  
  constructor(private prodSrv: ProductoService, public router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { this.cantidad = prodSrv.verArticulosComprados();}
    });
    this.productos = prodSrv.obtenerTodos();
    };

  }

