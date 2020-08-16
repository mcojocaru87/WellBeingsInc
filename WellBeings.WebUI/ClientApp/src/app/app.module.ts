import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ListContainerComponent } from './shared/list-container/list-container.component';
import { GridContainerComponent } from './shared/grid-container/grid-container.component';
import { RetailersComponent } from './pages/retailers/retailers.component';

import { ProductService } from './core/services/product.service';
import { PagerService } from './core/services/pager.service';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductsComponent,
    ListContainerComponent,
    GridContainerComponent,
    RetailersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    StorageServiceModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'retailers', component: RetailersComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'products', component: ProductsComponent }
    ])
  ],
  providers: [
    ProductService,
    PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
