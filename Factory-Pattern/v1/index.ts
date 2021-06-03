import { PizzaFactory } from "./PizzaFactory";
import { PizzaStore } from "./PizzaStore";

const factory = new PizzaFactory();
const store = new PizzaStore(factory);

store.orderPizza('cheese');

store.orderPizza('pep');