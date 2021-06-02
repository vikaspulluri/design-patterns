export interface Subject {
  registerObserver(ob: Observer);

  removeObserver(ob: Observer);

  notifyObservers();
}

export interface Observer {
  update(temp: number, pressure: number, humidity: number);
}

export interface DisplayElement {
  display();
}

export interface Statistics {
  max: number;
  min: number;
  avg: number;
}