import { askQuestion, CaffineBeverageWithHook } from "./CaffineBeverageWithHook";

export class Coffee extends CaffineBeverageWithHook {

  brew() {
    console.log('Dripping coffee through filter');
  }

  addCodiments() {
    console.log('Adding sugar and milk');
  }

  async customerWantsCodiments() {
    const answer = await askQuestion('Would you like milk and sugar with your coffee (y/n)?');
    return answer === 'y';
  }

}
