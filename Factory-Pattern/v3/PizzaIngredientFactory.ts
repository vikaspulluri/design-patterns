import { FreshCalms, FrozenCalms, Garlic, MarinaraSauce, MozzarellaCheese, Onion, PlumTomatoSauce, RedPepper, ReggianoCheese, SlicedPepperoni, ThickCrushDough, ThinCrushDough } from "./interface";

export interface PizzaIngredientFactory {
  createDough();
  createSauce();
  createCheese();
  createVeggies();
  createPepperoni();
  createCalm();
}

export class NYIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThinCrushDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    const veggies = [new Garlic(), new Onion()];
    return veggies;
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createCalm() {
    return new FrozenCalms();
  }
}

export class IndianIngredientFactory implements PizzaIngredientFactory {
  createDough() {
    return new ThickCrushDough();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }

  createCheese() {
    return new MozzarellaCheese();
  }

  createVeggies() {
    const veggies = [new RedPepper(), new Onion()];
    return veggies;
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createCalm() {
    return new FreshCalms();
  }
}