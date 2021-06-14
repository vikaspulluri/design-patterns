import { GumballMachine } from "./GumballMachine";
import * as chalk from 'chalk';

const machine = new GumballMachine(5);
machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);

machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);

machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);

machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);

machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);

machine.insertQuarter();
machine.turnCrank();

console.log(
  chalk.yellow('machine: ', machine.getCount())
);