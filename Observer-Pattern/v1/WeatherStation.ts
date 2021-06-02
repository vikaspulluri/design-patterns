import { CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay } from "./observers";
import { WeatherData } from "./WeatherData";

export class WeatherStation {
  weatherData = new WeatherData();
  currentDisplay = new CurrentConditionsDisplay(this.weatherData);
  forecastDisplay = new ForecastDisplay(this.weatherData);
  statisticsDisplay = new StatisticsDisplay(this.weatherData);

  init() {
    this.weatherData.setMeasurements(30, 45, 50);
    this.weatherData.setMeasurements(40, 55, 60);
    this.weatherData.setMeasurements(35, 65, 70);
  }
}