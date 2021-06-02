import { DuckType } from "./Children";

export class MiniDuckSimulator {
  duck;
  constructor(private Duck: DuckType) {
    this.duck = Duck;
  }

  init() {
    this.duck.display();
    this.duck.performQuack();
    this.duck.performFly();
  }
}
