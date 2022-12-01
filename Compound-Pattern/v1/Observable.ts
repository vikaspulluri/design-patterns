import { Observer, QuackObservable } from "./interface";

export class Observable implements QuackObservable {
  private observers = [];

  constructor(private duck: QuackObservable) {}
  
  registerObserver(observer: Observer) {
    this.observers.push(observer);  
  }

  notifyObservers() {
    this.observers.forEach(obsrever => obsrever.update(this.duck));
  }
}