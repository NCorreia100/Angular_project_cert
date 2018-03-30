import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ProductComponent } from '../app/products/products.component';
import { AppComponent } from '../app/app.component';
import {ProductFilter} from './products/product.pipe';
import { StarRating } from './star/star.component';
import { ProdServices } from './services/product.services';

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpModule
    ],
    declarations: [
        AppComponent, ProductComponent, ProductFilter,StarRating
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [ProdServices
    ]
})
export class AppModule { 
    
}