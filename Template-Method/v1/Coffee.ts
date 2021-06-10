import { CaffineBeverage } from "./CaffineBeverage";

export class Coffee extends CaffineBeverage {
  brew() {
    console.log('Dripping coffee through filter');
  }

  addCodiments() {
    console.log('Adding sugar and milk');
  }
}
