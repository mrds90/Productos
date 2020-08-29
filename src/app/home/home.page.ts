import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos;
  private cantidad=0;
  
  constructor(private prodSrv: ProductoService) {
    this.productos = prodSrv.obtenerTodos();
 };
}
