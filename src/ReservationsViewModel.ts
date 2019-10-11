import * as ko from 'knockout';
import SeatReservation from './SeatReservation';
import Meal from './IMeal';

export default class ReservationsViewModel {
    availableMeals: Array<Meal>
    seats: KnockoutObservableArray<SeatReservation>
    totalSurcharge: KnockoutComputedFunctions<number>

    constructor () {
        this.availableMeals = [
            { mealName: "Standard (sandwich)", price: 0 },
            { mealName: "Premium (lobster)", price: 34.95 },
            { mealName: "Ultimate (whole zebra)", price: 290 }
          ];

        this.seats = ko.observableArray([
            new SeatReservation('Steve', this.availableMeals[0]),
            new SeatReservation('Sally', this.availableMeals[0])
        ]);

        this.totalSurcharge = ko.computed(function (): number {
            let total = 0;
            
            this.seats().map((seat: SeatReservation): number => total += seat.meal().price);

            return total;
        }, this);


        this.addSeat = this.addSeat.bind(this);
        this.removeSeat = this.removeSeat.bind(this);
        
        document.getElementById('addReservation').focus();
    }

    addSeat (): void {
        this.seats.push(new SeatReservation("", this.availableMeals[0]));
    }

    removeSeat (seat: SeatReservation, e: Event) : void {
        e.preventDefault();
        this.seats.remove(seat);
    }
}