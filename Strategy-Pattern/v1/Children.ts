import { FlyNoWay, FlyWithWings, Quack, Squeak } from "./Behavior";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log('I am a Mallard Duck!');
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }
}

export type DuckType = MallardDuck | ModelDuck;