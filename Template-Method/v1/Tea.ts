import { CaffineBeverage } from "./CaffineBeverage";

export class Tea extends CaffineBeverage {
  brew() {
    console.log('Steeping the Tea');
  }

  addCodiments() {
    console.log('Adding Lemon');
  }
}
