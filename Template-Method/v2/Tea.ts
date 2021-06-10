import { askQuestion, CaffineBeverageWithHook } from "./CaffineBeverageWithHook";

export class Tea extends CaffineBeverageWithHook {
  brew() {
    console.log('Steeping the Tea');
  }

  addCodiments() {
    console.log('Adding Lemon');
  }

  async customerWantsCodiments() {
    const answer = await askQuestion('Would you like lemon with your tea (y/n)?');
    return answer === 'y';
  }
}
