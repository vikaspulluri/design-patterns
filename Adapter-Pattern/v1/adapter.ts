import { Duck, Turkey } from "./interface";

export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {
    this.turkey = turkey;
  }

  quack() {
    this.turkey.gobble();
  }

  fly() {
    this.turkey.fly();
  }
}