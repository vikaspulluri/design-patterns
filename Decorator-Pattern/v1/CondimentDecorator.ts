import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
  constructor() {
    super();
  }

  getDescription() {
    return '';
  }
}