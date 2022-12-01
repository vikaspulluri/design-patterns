export interface Quackable extends QuackObservable {
  quack();
}

export interface QuackObservable {
  registerObserver?(observer: Observer);
  notifyObservers?();
}

export interface Observer {
  update(duck: QuackObservable)
}