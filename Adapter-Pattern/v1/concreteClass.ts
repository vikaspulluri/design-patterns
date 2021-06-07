import { Duck, Turkey } from "./interface";

export class MallardDuck implements Duck {
  quack() {
    console.log('Quack');
  }

  fly() {
    console.log('Duck Fly');
  }
}

export class WildTurkey implements Turkey {
  gobble() {
    console.log('Gobble');
  }

  fly() {
    console.log('Turkey Fly');
  }
}
