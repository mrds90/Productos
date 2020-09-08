import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      
    },
    {
      path: ":id",
      loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
      
    }
    ]
    
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
