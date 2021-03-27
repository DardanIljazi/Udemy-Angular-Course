import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/guards/auth-guard/auth-guard.service';
import {AppComponent} from './app.component';
import {ErrorViewComponent} from './views/error-view/error-view.component';
import {AuthViewComponent} from './views/auth-view/auth-view.component';
import {ProductsViewComponent} from './views/products-view/products-view.component';
import {ProductViewComponent} from './views/product-view/product-view.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: ProductsViewComponent},
  {path: 'products', canActivate: [AuthGuardService], component: ProductsViewComponent},
  {path: 'products/:id', canActivate: [AuthGuardService], component: ProductViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
