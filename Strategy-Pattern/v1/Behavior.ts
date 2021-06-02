import { FlyBehavior, QuackBehavior } from "./interface";

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('flying');
  }
}

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('cannot fly');
  }
}

export class Quack implements QuackBehavior {
  quack() {
    console.log('quack!');
  }
}

export class Squeak implements QuackBehavior {
  quack() {
    console.log('squeak!');
  }
}

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log('mute quack!');
  }
}
