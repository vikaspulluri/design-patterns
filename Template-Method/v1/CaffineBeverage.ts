export abstract class CaffineBeverage {
  prepareRecipe() {
    this.boilWater(); // primitive operation
    this.brew(); // Concrete Operation
    this.pourInCup(); // primitive operation
    this.addCodiments(); // Concrete Operation
  }

  abstract brew();
  abstract addCodiments();

  boilWater() {
    console.log('Water added and boiled');
  }

  pourInCup() {
    console.log('Poured into cup');
  }
}