import { FlyBehavior, QuackBehavior } from "./interface";

export class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyB: FlyBehavior) {
    this.flyBehavior = flyB;
  }

  setQuackBehavior(quackB: QuackBehavior) {
    this.quackBehavior = quackB;
  }

  swim() {}

  display() {
    console.log('it is a beautiful parent duck!');
  }
}