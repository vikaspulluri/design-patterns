import { Observer, QuackObservable } from "./interface";

export class Quackologist implements Observer {
  update(duck: QuackObservable) {
    console.log('Hey Quackologist, ' + duck.constructor.name + ' just quacked');
  }
}
