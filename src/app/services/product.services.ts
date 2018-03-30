import { Injectable } from '@angular/core';
import { InterProduct } from '../products/products';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()


export class ProdServices {

    private productsURL = './products/products.json';

    constructor(private http: Http) {

    }


    getProducts(): Observable<InterProduct[]> {
        return this.http.get(this.productsURL)
        .map((response: Response)=> <InterProduct[]>response.json())
        .catch(this.handleError);

    }
    private handleError(error:Response){
        return Observable.throw(error.json().error|| "Server Error")
    }

    

           

}