import * as ko from 'knockout';
import Meal from './IMeal';

export default class SeatReservation {
    name: string
    meal: KnockoutObservable<Meal>   
    formattedPrice: KnockoutComputed<string>

    constructor (name: string, initialMeal: Meal) {
        this.name = name;
        this.meal = ko.observable(initialMeal);

        this.formattedPrice = ko.computed(function (): string {
            let price = this.meal().price;            
            return price ? `$ ${price.toFixed(2)}` : 'None';
        }, this) ;       
    }
}