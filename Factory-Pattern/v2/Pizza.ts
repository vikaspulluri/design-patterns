export abstract class Pizza {
  name: string = 'Pizza';
  dough: string;
  sauce: string;
  toppings = [];
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

export class NYCheesePizza extends Pizza {
  name: string = 'NY style sauce and cheese pizza';
  dough: string = 'Thin Crust Dough';
  sauce: string = 'Marinara Sauce';
  toppings = ['Pepper', 'Olives', 'Rashers'];
}

export class NYPepperoniPizza extends Pizza {
  name: string = 'NY Pepperoni Pizza';
  dough = 'Thin Crust Dough';
  sauce = 'BBQ Sauce';
  toppings = ['Lettuce'];
}

export class IndCheesePizza extends Pizza {
  name: string = 'Indian Cheese Pizza';
  dough = 'Thick Crush Dough';
  sauce = 'Red Chilli Sauce';
  toppings = ['Tandoori Chicken'];
}

export class IndPepperoniPizza extends Pizza {
  name: string = 'Indian Pepperoni Pizza';
  dough = 'Thick Crush Dough';
  sauce = 'Mint Mayo Sauce';
  toppings = ['Chicken Tikka', 'Cheese'];

  cut() {
    console.log(`Cutting Pizza into square slices`);
  }
}
