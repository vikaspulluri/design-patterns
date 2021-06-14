import { State } from "./State";
import { HasQuarterState, NoQuarterState, SoldOutState, SoldState, WinnerState } from "./states";

export class GumballMachine {
  private _soldOutState: State;
  private _noQuarterState: State;
  private _hasQuarterState: State;
  private _soldState: State;
  private _winnerState: State;

  private state: State;
  private count = 0;

  get soldOutState() {
    return this._soldOutState;
  }

  get noQuarterState() {
    return this._noQuarterState;
  }

  get hasQuarterState() {
    return this._hasQuarterState;
  }

  get soldState() {
    return this._soldState;
  }

  get winnerState() {
    return this._winnerState;
  }

  constructor(gumballs: number) {
    this._soldOutState = new SoldOutState(this);
    this._noQuarterState = new NoQuarterState(this);
    this._hasQuarterState = new HasQuarterState(this);
    this._soldState = new SoldState(this);
    this._winnerState = new WinnerState(this);
    this.count = gumballs;
    this.state = this.count > 0 ? this.noQuarterState : this.soldOutState;
  }

  setState(state: State) {
    this.state = state;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  dispense() {
    this.state.dispense();
  }

  releaseBall() {
    console.log('A gumball comes rolling out the slot...');
    if (this.count !== 0) this.count--;
  }

  getCount() {
    return this.count;
  }
}