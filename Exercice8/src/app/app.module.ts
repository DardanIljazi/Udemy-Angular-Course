import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import {ProductService} from './services/product/product.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';
import { HeaderComponent } from './components/header/header.component';
import {ProductViewComponent} from './views/product-view/product-view.component';
import { CreateProductViewComponent } from './views/create-product-view/create-product-view.component';
import {FormsModule} from '@angular/forms';
import { EditProductViewComponent } from './views/edit-product-view/edit-product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    AuthViewComponent,
    ErrorViewComponent,
    ProductsViewComponent,
    HeaderComponent,
    ProductViewComponent,
    CreateProductViewComponent,
    EditProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
