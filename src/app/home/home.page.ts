import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos;
  private carrito: Array<Producto>;
  private cantidad = 0;
    
  constructor(private prodSrv: ProductoService, private alContrl: AlertController) {
    prodSrv.obtenerTodos().subscribe(datos => {
      this.productos = datos;
     });
    this.carrito = prodSrv.getCarrito();
  };
  public async verCarrito(){
    const cuerpoAleta = {
      header: "Titulo",
      subHeader: "SubTitulo",
      message: "Mensaje",
      buttons: ["ok"]
    };
  
    const alerta = await this.alContrl.create(cuerpoAleta)
    await alerta.present();
  }
  }

