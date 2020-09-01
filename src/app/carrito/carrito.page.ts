import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { Router, NavigationEnd } from '@angular/router';
import { Carrito } from '../model/carrito';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
  
  export class CarritoPage {
    private productos;
    private cantidad;
    private total = 0;
    private carro: Array<Carrito>;
    
    constructor(private prodSrv: ProductoService, public router: Router) {
      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          this.productos = [];
          this.total = 0;
          this.carro = prodSrv.cargarCarrito();
          this.cantidad = prodSrv.cantidadDeArticulosComprados();
          for (let carr of this.carro)
          {
            let aux = prodSrv.obtenerPorId(carr.id);  
            this.productos.push(aux);
            this.total = this.total + aux.precio * carr.cantidad;
          }
                   
        }
      });
      
  };
  public calcularCantidad(id:string) {
    for (let carr of this.carro) {
      if (carr.id == id) {
        return carr.cantidad;
      }
    }
  }
  public comprarCarrito() {
    alert('compra realizada')
    this.prodSrv.comprarCarrito(this.carro);
  }

  
    }
  
