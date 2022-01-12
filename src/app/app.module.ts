import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {ProductListComponent} from './components/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import localePL from '@angular/common/locales/pl';
import {registerLocaleData} from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryListGridComponent } from './components/category-list-grid/category-list-grid.component';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    CategoryListGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ProductService,
    {provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
