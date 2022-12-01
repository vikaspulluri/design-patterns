import { DuckType } from "./Children";

export class MiniDuckSimulator {
  constructor(public duck: DuckType) {}

  init() {
    this.duck.display();
    this.duck.performQuack();
    this.duck.performFly();
  }
}
