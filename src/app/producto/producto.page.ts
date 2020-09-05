import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Carrito } from '../model/carrito';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  private producto;
  private cantidad: number;
  private carrito: Carrito;
  private comprado: number=0;
  constructor(private activeteRoute:ActivatedRoute, private prodSrv: ProductoService) { }

  ngOnInit() {
      this.activeteRoute.paramMap.subscribe(paramMap => { //el segundo paramMap es una variable y el primero una Clase.
      this.producto = this.prodSrv.obtenerPorId(paramMap.get('id'));
      this.carrito = this.prodSrv.obtenerCarritoPorId(paramMap.get('id'));
        if (this.carrito) {
          this.comprado = this.carrito.cantidad;
        }
        
    });
  }
  agregarCarrito() {
    this.activeteRoute.paramMap.subscribe(paramMap => {
      this.prodSrv.agregarUnoAlCarrito(paramMap.get('id'), this.cantidad);
    });
  }

}
