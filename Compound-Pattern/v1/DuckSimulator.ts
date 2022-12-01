import { DuckCall, MallardDuck, RedHeadDuck, RubberDuck } from "./Duck";
import { AbstractDuckFactory, CountingDuckFactory } from "./DuckFactory";
import { Flock } from "./Flock";
import { Goose } from "./Goose";
import { GooseAdapter } from "./GooseAdapter";
import { Quackable } from "./interface";
import { Quackologist } from "./Observer";
import { QuackCounter } from "./QuackCounter";

export class DuckSimulator {

  constructor() {
    const duckFactory = new CountingDuckFactory();
    this.simulate(duckFactory);
  }

  simulate(factory: AbstractDuckFactory) {
    const mallardDuck = factory.createMallardDuck();
    const rubberDuck = factory.createRubberDuck();
    const redHeadDuck = factory.createRedHeadDuck();
    const duckCall = factory.createDuckCall();
    const gooseDuck = new GooseAdapter(new Goose());

    const flockOfDucks = new Flock();
    flockOfDucks.add(mallardDuck);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(redHeadDuck);
    flockOfDucks.add(duckCall);

    const flockOfMallards = new Flock();
    const mallard1 = factory.createMallardDuck();
    const mallard2 = factory.createMallardDuck();
    const mallard3 = factory.createMallardDuck();
    const mallard4 = factory.createMallardDuck();
    flockOfMallards.add(mallard1);
    flockOfMallards.add(mallard2);
    flockOfMallards.add(mallard3);
    flockOfMallards.add(mallard4);

    flockOfDucks.add(flockOfMallards);

    const quackologist = new Quackologist();
    flockOfDucks.registerObserver(quackologist);
    
    console.log('simulating Mallards...')
    this.sim(flockOfMallards);

    console.log('simulating entire flock...');
    this.sim(flockOfDucks);

    console.log('total quacks', QuackCounter.getQuacks());
  }

  sim(duck: Quackable) {
    duck.quack();
  }
}