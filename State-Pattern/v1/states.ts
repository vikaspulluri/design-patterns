import { GumballMachine } from "./GumballMachine";
import { State } from "./State";
import * as chalk from 'chalk';

export class SoldState implements State {
  constructor(private machine: GumballMachine) {
    this.machine = machine;
  }
  insertQuarter() {
    console.log(
      chalk.blue('Please wait, we are already giving you a gumball')
    );
  }

  ejectQuarter() {
    console.log(
      chalk.yellow('Sorry, you already turned the crank')
    );
  }

  turnCrank() {
    console.log(
      chalk.magenta('Turning twice does not give you another gumball')
    );
  }

  dispense() {
    this.machine.releaseBall();
    if (this.machine.getCount() > 0) {
      this.machine.setState(this.machine.noQuarterState);
    } else {
      console.log(
        chalk.bgRedBright('OOPS! Out of gumballs')
      );
    }
  }
}

export class SoldOutState implements State {
  constructor(private machine: GumballMachine) {
    this.machine = machine;
  }
  insertQuarter() {
    console.log(
      chalk.blue('Machine is out of gumballs, you can not insert a quarter')
    );
  }

  ejectQuarter() {
    console.log(
      chalk.yellow('You can not eject, you have not inserted a quarter yet')
    );
  }

  turnCrank() {
    console.log(
      chalk.magenta('You turned, but there are no gumballs')
    );
  }

  dispense() {
    console.log(
      chalk.green('No gumballs dispensed')
    );
  }
}

export class HasQuarterState implements State {
  
  private randomWinner = probability(0.2); // 20% winning chance
  constructor(private machine: GumballMachine) {
    this.machine = machine;
  }
  insertQuarter() {
    console.log(
      chalk.blue('You can not insert another quarter')  
    );
  }

  ejectQuarter() {
    console.log(
      chalk.yellow('Quarter Rejected')
    );
    this.machine.setState(this.machine.noQuarterState);
  }

  turnCrank() {
    console.log(
      chalk.green('You turned...')
    );
    if (this.machine.getCount() > 0) {
      if (this.randomWinner) this.machine.setState(this.machine.winnerState);
      if (!this.randomWinner) this.machine.setState(this.machine.soldState);
    } else {
      console.log(
        chalk.red('OOPS! Out of gumballs')
      );
      this.machine.setState(this.machine.soldOutState);
    }
  }

  dispense() {
    console.log(
      chalk.magenta('No gumball dispensed')
    );
  }
}

export class NoQuarterState implements State {

  constructor(private machine: GumballMachine) {
    this.machine = machine;
  }
  insertQuarter() {
    console.log(
      chalk.blue('You inserted a quarter')
    );
    this.machine.setState(this.machine.hasQuarterState);
  }

  ejectQuarter() {
    console.log(
      chalk.yellow('You have not inserted a quarter')
    );
  }

  turnCrank() {
    console.log(
      chalk.magenta('You turned, but there is no quarter')
    );
  }

  dispense() {
    console.log(
      chalk.red('You need to pay first')
    )
  }
}

export class WinnerState implements State {
  constructor(private machine: GumballMachine) {
    this.machine = machine;
  }
  insertQuarter() {
    console.log(
      chalk.blue('Please wait, we are already giving you a gumball')
    );
  }

  ejectQuarter() {
    console.log(
      chalk.yellow('Sorry, you already turned the crank')
    );
  }

  turnCrank() {
    console.log(
      chalk.magenta('Turning twice does not give you another gumball')
    );
  }

  dispense() {
    console.log(
      chalk.bgGreen('Congrats! You are the winner, you got 2 gumballs for your quarter...')
    );
    this.machine.releaseBall();
    if (this.machine.getCount() === 0) {
      this.machine.setState(this.machine.noQuarterState);
    } else {
      this.machine.releaseBall();
      if (this.machine.getCount() > 0) {
        this.machine.setState(this.machine.noQuarterState);
      } else {
        console.log(
          chalk.red('OOPS! Out of gumballs')
        );
        this.machine.setState(this.machine.soldOutState);
      }
    }
  }
}

function probability(n) {
  return !!n && Math.random() < n;
}