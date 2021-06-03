import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost() {
    return 25 + this.beverage.cost();
  }
}

export class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost() {
    return 35 + this.beverage.cost();
  }
}

export class Milk extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost() {
    return 15 + this.beverage.cost();
  }
}
