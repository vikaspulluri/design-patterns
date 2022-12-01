import { Observer, Quackable } from "./interface";
import { Observable } from "./Observable";

export class MallardDuck implements Quackable {
  observable: Observable;
  constructor() {
    this.observable = new Observable(this);
  }
  quack() {
    console.log('Quack');
    this.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }
}

export class RedHeadDuck implements Quackable {
  quack() {
    console.log('Quack');
  }
}

export class DuckCall implements Quackable {
  quack() {
    console.log('Kwack!');
  }
}

export class RubberDuck implements Quackable {
  quack() {
    console.log('Squeak');
  }
}