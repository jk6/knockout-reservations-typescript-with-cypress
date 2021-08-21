import * as ko from "knockout";
import IMeal from "./IMeal";

export default class SeatReservation {
  name: string;
  meal: KnockoutObservable<IMeal>;
  formattedPrice: KnockoutComputedFunctions<string>;

  constructor(name: string, initialMeal: IMeal) {
    this.name = name;
    this.meal = ko.observable(initialMeal);

    this.formattedPrice = ko.computed(function (): string {
      let price = this.meal().price;
      return price ? `$ ${price.toFixed(2)}` : "None";
    }, this);
  }
}
