import { IndCheesePizza, IndPepperoniPizza, NYCheesePizza, NYPepperoniPizza, Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new NYCheesePizza();
    } else if (type === 'pep') {
      pizza = new NYPepperoniPizza();
    }
    return pizza;
  }
}

export class IndianStylePizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new IndCheesePizza();
    } else if (type === 'pep') {
      pizza = new IndPepperoniPizza();
    }
    return pizza;
  }
}