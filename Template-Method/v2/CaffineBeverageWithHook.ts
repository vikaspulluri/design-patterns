const readline = require('readline');

export abstract class CaffineBeverageWithHook {
  prepareRecipe() {
    this.boilWater(); // primitive operation
    this.brew(); // Concrete Operation
    this.pourInCup(); // primitive operation
    this.customerWantsCodiments().then(answer => {
      if (answer) {
        this.addCodiments();
      }
    })
  }

  abstract brew();
  abstract addCodiments();

  boilWater() {
    console.log('Water added and boiled');
  }

  pourInCup() {
    console.log('Poured into cup');
  }

  async customerWantsCodiments(): Promise<boolean> {
    return true;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export async function askQuestion(question: string): Promise<string> {
  return new Promise((res, rej) => {
    rl.question(question, (answer) => {
      res(answer);
      rl.close();
    });
  });
}
