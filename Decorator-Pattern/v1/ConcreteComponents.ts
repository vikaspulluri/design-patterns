import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  description: string = 'Espresso';
  constructor() {
    super();
  }

  public cost(): number {
    return 35;
  }
}

export class HouseBlend extends Beverage {
  description: string = 'House Blend';

  public cost(): number {
    return 60;
  }
}

export class DarkRoast extends Beverage {
  description: string = 'Dark Roast';

  public cost(): number {
    return 80;
  }
}

export class Decaf extends Beverage {
  description: string = 'Decaf';

  public cost(): number {
    return 50;
  }
}
