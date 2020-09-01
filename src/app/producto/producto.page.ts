import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  private producto;
  constructor(private activeteRoute:ActivatedRoute, private prodSrv: ProductoService) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(paramMap => { //el segundo paramMap es una variable y el primero una Clase.
      this.producto = this.prodSrv.obtenerPorId(paramMap.get('id'));
      //alert(paramMap.get("id"));
    });
  }
  agregarCarrito() {
    this.prodSrv.agregarUnoAlCarrito()
    alert('se ejecuto la función');
  }

}
