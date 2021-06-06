import { Calm, Cheese, Dough, Pepperoni, Sauce, Veggie } from "./interface";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export abstract class Pizza {
  name: string = 'Pizza';
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  calm: Calm;
  toppings: Veggie[] = [];
  pepperoni: Pepperoni;
  prepare() {
    console.log(`
      Preparing ${this.name}
      Tossing dough...,
      Adding sause...,
      Adding toppings ${this.toppings}  
    `);
  }

  bake() {
    console.log(`Bake for 25 mins at 350`);
  }

  cut() {
    console.log(`Cutting pizza into slices`);
  }

  box() {
    console.log(`Place pizza in official Pizza box`);
  }
}

export class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;
  constructor(factory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = factory;
  }

  prepare() {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export class CalmPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;
  constructor(factory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = factory;
  }

  prepare() {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.calm = this.ingredientFactory.createCalm();
  }
}
