import { DuckCall, MallardDuck, RedHeadDuck, RubberDuck } from "./Duck";
import { QuackCounter } from "./QuackCounter";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck();
  public abstract createRedHeadDuck();
  public abstract createDuckCall();
  public abstract createRubberDuck();
}

export class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck() {
    return new MallardDuck();
  }

  public createRedHeadDuck() {
    return new RedHeadDuck();
  }

  public createDuckCall() {
    return new DuckCall();
  }

  public createRubberDuck() {
    return new RubberDuck();
  }
}

export class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck() {
    return new QuackCounter(new MallardDuck());
  }

  public createRedHeadDuck() {
    return  new QuackCounter(new RedHeadDuck());
  }

  public createDuckCall() {
    return new QuackCounter(new DuckCall());
  }

  public createRubberDuck() {
    return new QuackCounter(new RubberDuck());
  }
}