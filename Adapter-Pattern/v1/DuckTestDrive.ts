import { TurkeyAdapter } from "./adapter";
import { MallardDuck, WildTurkey } from "./concreteClass";
import { Duck } from "./interface";

export class DuckTestDrive {
  init() {
    const duck = new MallardDuck();
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log('Turkey says...');
    turkey.gobble();
    turkey.fly();

    console.log('Duck says...');
    this.testDuck(duck);

    console.log('Turkey Adapter says...');
    this.testDuck(turkeyAdapter);
  }

  testDuck(duck: Duck) {
    duck.fly();
    duck.quack();
  }
}