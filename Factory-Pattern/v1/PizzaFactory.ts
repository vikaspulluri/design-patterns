import { CheesePizza, PepperoniPizza, Pizza } from "./Pizza";

export class PizzaFactory {

  createPizza(type: string): Pizza {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pep') {
      pizza = new PepperoniPizza();
    }
    return pizza;
  }
}