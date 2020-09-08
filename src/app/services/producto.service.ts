import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private carrito: Array<Producto> = [];
  
  
  constructor(private httpClient: HttpClient) { };
  
  public obtenerTodos() {
    return this.httpClient.get<Producto[]>('http://localhost:3000/Productos');
  }
  public obtenerPorId(id: string) {
    return this.httpClient.get<Producto>('http://localhost:3000/Productos/' + id);
  }
  public agregar(prod: Producto, cantidad: number) {
    for (let i = 0; i < cantidad; i++) {
      this.carrito.push(prod);
    }
  }
  public getCarrito() {
    return this.carrito;
  }
}
