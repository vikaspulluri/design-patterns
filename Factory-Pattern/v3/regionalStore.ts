import { CalmPizza, CheesePizza, Pizza } from "./Pizza";
import { IndianIngredientFactory, NYIngredientFactory } from "./PizzaIngredientFactory";
import { PizzaStore } from "./PizzaStore";

export class NYStylePizzaStore extends PizzaStore {
  protected ingredientFactory = new NYIngredientFactory();
  createPizza(type: string) {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new CheesePizza(this.ingredientFactory);
      pizza.name = 'NY Style Cheese Pizza';
    } else if (type === 'pep') {
      pizza = new CalmPizza(this.ingredientFactory);
      pizza.name = 'NY Style Calm Pizza';
    }
    return pizza;
  }
}

export class IndianStylePizzaStore extends PizzaStore {
  protected ingredientFactory = new IndianIngredientFactory();
  createPizza(type: string) {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new CheesePizza(this.ingredientFactory);
      pizza.name = 'Indian Style Cheese Pizza';
    } else if (type === 'pep') {
      pizza = new CalmPizza(this.ingredientFactory);
      pizza.name = 'Indian Style Calm Pizza';
    }
    return pizza;
  }
}