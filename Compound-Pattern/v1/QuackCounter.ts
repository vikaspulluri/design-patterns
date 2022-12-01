import { Observer, Quackable } from "./interface";

export class QuackCounter implements Quackable {
  static noOfQuaks = 0;
  constructor(private duck: Quackable) {}
  
  quack() {
    this.duck.quack();
    QuackCounter.noOfQuaks++;
  }

  static getQuacks(): number {
    return this.noOfQuaks;
  }
}