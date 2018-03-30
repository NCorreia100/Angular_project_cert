import { Component, OnInit } from '@angular/core';
import { InterProduct } from './products';
import { ProdServices } from '../services/product.services';

@Component({
  selector: 'product-comp',
  templateUrl: './products.component.html',
  //styles:['thead{color:green}', 'h3{color:red}']
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  title = "********* Product List ***********"
  showImage: boolean = false;
  imageWidth = 50;
  //imageButton = "Show Image";
  filterProduct = '';
  errorMessage: string;
  products: InterProduct[];
  toggleImage(): void {
    this.showImage = !this.showImage;
    /* if (this.imageButton.charAt(0)=='S'){
       this.imageButton = "Hide Image";
     }else{
       this.imageButton = "Show Image";
     }*/
  }
  constructor(private prodServices: ProdServices) {
  }

  ngOnInit(): void {
    this.prodServices.getProducts()
    .subscribe(products => this.products = products,
    error=> this.errorMessage = <any>error)
  }

  onRatingClicked(message: string): void {
    this.title = message;
  }

 
}