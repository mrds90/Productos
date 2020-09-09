import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private productos;
  private carrito: Array<Producto>;
  private cantidad = 0;
    
  constructor(private prodSrv: ProductoService, private alContrl: AlertController, private lodading: LoadingController) { }
  
  public async ngOnInit() {
    const loading = await this.lodading.create({  message: 'Cargando',
    duration: 2000,
    spinner: 'bubbles'});  

    loading.present();
    this.prodSrv.obtenerTodos().subscribe(datos => {
      
      this.productos = datos
      loading.dismiss();
     });
    this.carrito = this.prodSrv.getCarrito();
    
  }
  
  public async verCarrito(){
    const cuerpoAleta = {
      header: "Carro de compras",
      subHeader: "SubTitulo",
      message: "Mensaje",
      buttons: ["ok"]
    };
  
    const alerta = await this.alContrl.create(cuerpoAleta)
    await alerta.present();
  }
  }

