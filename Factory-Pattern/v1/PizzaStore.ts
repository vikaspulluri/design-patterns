import { Pizza } from "./Pizza";
import { PizzaFactory } from "./PizzaFactory";

export class PizzaStore {
  factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string) {
    const pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}
