export abstract class Pizza {
  name: string = 'Pizza';
  prepare() {
    console.log(this.name, ' prepared');
  }

  bake() {
    console.log(this.name, ' baking done');
  }

  cut() {
    console.log(this.name, ' cutting done');
  }

  box() {
    console.log(this.name, ' boxing done');
  }
}

export class CheesePizza extends Pizza {
  name: string = 'Cheese Pizza';
}

export class PepperoniPizza extends Pizza {
  name: string = 'Pepperoni Pizza';
}
