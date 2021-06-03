import { DarkRoast, Espresso } from "./ConcreteComponents";
import { Milk, Mocha, Whip } from "./ConcreteDecorators";

export class StarBuzzCoffee {
  
  init() {
    const beverage = new Espresso();
    console.log(beverage.getDescription() + ' $' + beverage.cost());

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    beverage2 = new Milk(beverage2);
    console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);
  }

}