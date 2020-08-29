import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:Array<Producto> = [
    {
      id: '1',
      nombre: 'Celular',
      precio: 1500,
      cantidad: 10,
      imagen: 'https://http2.mlstatic.com/celular-motorola-one-action-128gb-triple-camara-oficial-12c-D_NQ_NP_750867-MLA32171288429_092019-F.jpg'
    },
    {
      id: '2',
      nombre: 'Tablet',
      precio: 3000,
      cantidad: 3,
      imagen: 'https://www.lenovo.com/medias/lenovo-tablet-m10-hero-1-.png?context=bWFzdGVyfHJvb3R8NjI0MTF8aW1hZ2UvcG5nfGgyMi9oMmIvOTk4ODM0NjQ0NTg1NC5wbmd8MDYxMDlmYTE0M2YxZDMyM2VjYTUyMThjNDQwM2VlNzgyYTQ5ZTM0OTVlZmM4OWI3OTc0ZjA1NjI4YjYwNTQxZQ'
    },
    {
      id: '3',
      nombre: 'Notebook',
      precio: 7000,
      cantidad: 0,
      imagen: 'https://medias.musimundo.com/medias/sys_master/images/images/h87/he8/10166024339486/00291043-138995-138995-01-138995-01.jpg'
    }
    ]
  constructor() { }
  
  public obtenerTodos() {
    return this.productos;
  }
  public obtenerPorId(id: string) {
    for (let prod of this.productos) {
      if (prod.id == id) { 
        return prod;
      }
    }
  }
  public agregar(prod: Producto) {
    this.productos.push(prod);
  }  
  
}
