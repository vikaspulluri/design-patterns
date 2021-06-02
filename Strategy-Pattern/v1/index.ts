import { FlyWithWings } from "./Behavior";
import { MallardDuck, ModelDuck } from "./Children";
import { MiniDuckSimulator } from "./MiniDuckSimulator";

const simulator = new MiniDuckSimulator(new MallardDuck());
simulator.init();

const simulator2 = new MiniDuckSimulator(new ModelDuck());
simulator2.init();

simulator2.duck.performFly();

simulator2.duck.setFlyBehavior(new FlyWithWings());

console.log('Fly behavior changed runtime');

simulator2.duck.performFly();