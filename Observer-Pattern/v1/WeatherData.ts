import { Observer, Subject } from "./interface";

export class WeatherData implements Subject {

  private observers: Observer[] = [];
  private temperature: number;
  private pressure: number;
  private humidity: number;

  registerObserver(ob: Observer) {
    this.observers.push(ob);
  }

  removeObserver(ob: Observer) {
    const index = this.observers.findIndex(observer => observer === ob);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.pressure, this.humidity);
    });
  }

  setMeasurements(temp: number, pressure: number, humidity: number) {
    this.temperature = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.measurementChanged();
  }

  measurementChanged() {
    this.notifyObservers();
  }
}