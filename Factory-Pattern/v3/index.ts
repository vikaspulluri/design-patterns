import { IndianStylePizzaStore, NYStylePizzaStore } from "./regionalStore";

const nyStore = new NYStylePizzaStore();
const indStore = new IndianStylePizzaStore();

nyStore.orderPizza('cheese');

indStore.orderPizza('pep');