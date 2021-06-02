import { DisplayElement, Observer, Statistics, Subject } from "./interface";
import * as chalk  from 'chalk';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private humidity: number;

  constructor(private weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, pressure: number, humidity: number) {
    this.temperature = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(
      chalk.magenta(`Current Conditions => 
        Temperature: ${this.temperature}, Pressure: ${this.pressure}, Humidity: ${this.humidity}`
      )
    );
  }
}

export class StatisticsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private humidity: number;

  private history = {
    temperature: [],
    pressure: [],
    humidity: []
  };

  private stats: {temperature?: Statistics, pressure?: Statistics, humidity?: Statistics} = {};

  constructor(private weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, pressure: number, humidity: number) {
    this.temperature = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.updateHistory();
    this.display();
  }

  updateHistory() {
    this.history.temperature.push(this.temperature);
    this.history.pressure.push(this.pressure);
    this.history.humidity.push(this.humidity);
  }

  getStatistics(key: 'temperature' | 'pressure' | 'humidity') {
    const obj: Statistics = {
      max: Math.max(...this.history[key]),
      min: Math.min(...this.history[key]),
      avg: this.history[key].reduce((acc, cur) => acc + cur) / this.history[key].length
    };

    this.stats[key] = obj;
  }

  display() {
    this.getStatistics('temperature');
    this.getStatistics('pressure');
    this.getStatistics('humidity');
    console.log(`
      Statistics Conditions =>
      ${chalk.magenta(`Max/Min/Avg Temperature: ${this.stats.temperature.max}/${this.stats.temperature.min}/${this.stats.temperature.avg}`)},
      ${chalk.blue(`Max/Min/Avg Pressure: ${this.stats.pressure.max}/${this.stats.pressure.min}/${this.stats.pressure.avg}`)}, 
      ${chalk.yellow(`Max/Min/Avg Humidity: ${this.stats.humidity.max}/${this.stats.humidity.min}/${this.stats.humidity.avg}`)}`);
  }
}

export class ForecastDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private humidity: number;

  constructor(private weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, pressure: number, humidity: number) {
    this.temperature = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
  }

  getForecastMessage() {
    if (this.temperature < 40) {
      return `Watch out for cooler weather!`;
    }
    return `Watch out for smoky hot weather!!!`;
  }

  display() {
    console.log(
      chalk.green(`Forecast Conditions => ${this.getForecastMessage()}`)
    );
  }
}

export class ThirdPartyDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private humidity: number;

  constructor(private weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, pressure: number, humidity: number) {
    this.temperature = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Third Party Conditions => Temperature: ${this.temperature}, Pressure: ${this.pressure}, Humidity: ${this.humidity}`);
  }
}