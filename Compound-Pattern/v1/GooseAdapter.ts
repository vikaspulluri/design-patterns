import { Goose } from "./Goose";
import { Quackable } from "./interface";

export class GooseAdapter implements Quackable {
  constructor(private goose: Goose) {}
  
  quack() {
    this.goose.honk();
  }
}