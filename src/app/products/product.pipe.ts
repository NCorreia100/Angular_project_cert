import { Pipe, PipeTransform } from '@angular/core';
import { InterProduct } from './products';

@Pipe({
    name: 'productFilter'


})

export class ProductFilter implements PipeTransform {
    transform(value: InterProduct[], filterBy: string): InterProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((products: InterProduct) =>
            products.Name.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}