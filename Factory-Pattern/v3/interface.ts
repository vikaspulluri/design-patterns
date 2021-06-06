export interface Dough {}

export interface Sauce {}

export interface Cheese {}

export interface Calm {}

export interface Pepperoni {}

export class ThinCrushDough implements Dough {
  constructor() {
    console.log('Thins Crust Dough');
  }
}

export class ThickCrushDough implements Dough {
  constructor() {
    console.log('Thick Crust Dough')
  }
}

export class PlumTomatoSauce implements Sauce {
  constructor() {
    console.log('Plum Tomato Sauce');
  }
}

export class MarinaraSauce implements Sauce {
  constructor() {
    console.log('Marinara Sauce');
  }
}

export class MozzarellaCheese implements Cheese {
  constructor() {
    console.log('Mozzarella Cheese');
  }
}

export class ReggianoCheese implements Cheese {
  constructor() {
    console.log('Reggiano Cheese');
  }
}

export class FrozenCalms implements Calm {
  constructor() {
    console.log('Frozen Calms');
  }
}

export class FreshCalms implements Calm {
  constructor() {
    console.log('Fresh Calms');
  }
}

export class SlicedPepperoni implements Pepperoni {
  constructor() {
    console.log('Sliced Pepperoni');
  }
}

export abstract class Veggie {}

export class Garlic extends Veggie {
  constructor() {
    super();
    console.log('Garlic');
  }
}

export class Onion extends Veggie {
  constructor() {
    super();
    console.log('Onion');
  }
}

export class Mushroom extends Veggie {
  constructor() {
    super();
    console.log('Mushroom');
  }
}

export class RedPepper extends Veggie {
  constructor() {
    super();
    console.log('Red Pepper');
  }
}