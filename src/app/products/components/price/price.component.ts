import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
    selector: 'products-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    public price: number = 0;
    public interval$?: Subscription;

    constructor(){

    }

    ngOnInit(): void {
        console.log("componente hijo ngOnInit");

        this.interval$ = interval(1000).subscribe( value => console.log(value));
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("componente hijo ngOnChanges");
        console.log([changes]);
    }

    ngOnDestroy(): void {
        console.log("componente hijo ngOnDestroy");
        this.interval$?.unsubscribe()
    }

    
}
