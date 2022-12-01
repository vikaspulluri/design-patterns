import { Observer, Quackable } from "./interface";
import { Observable } from "./Observable";

export class Flock implements Quackable {
  private quackers: Quackable[] = []
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  add(quacker: Quackable) {
    this.quackers.push(quacker);
  }

  quack() {
    this.quackers.forEach(quacker => {
      quacker.quack();
      this.notifyObservers();
    });
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }
}