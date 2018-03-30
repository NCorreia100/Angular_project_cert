import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarRating implements OnChanges{
    @Input()    rating: number;
    starWidth: number;
    

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
    
    ngOnChanges(): void{
        this.starWidth = this.rating*86/5;
    
        
    }
    onStar(): void{
        this.ratingClicked.emit(`Rating of product is ${this.rating}`);
    }
}