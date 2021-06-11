import { DinerMenu } from "./DinerMenu";
import { Iterator } from "./Iterator";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import * as chalk from 'chalk';
import { Menu } from "./Menu";

export class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;

  constructor(phMenu: Menu, dinerMenu: Menu) {
    this.pancakeHouseMenu = phMenu;
    this.dinerMenu = dinerMenu;
  }

  printMenu() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    console.log(
      chalk.blue('Breakfast Menu')
    );
    this.printItems(pancakeIterator);
    console.log(
      chalk.green('Dinner Menu')
    );
    this.printItems(dinerIterator);
  }

  private printItems(iterator: Iterator) {
    while(iterator.hasNext()) {
      let menuItem = iterator.next();
      console.log(menuItem.getName(), menuItem.getPrice(), menuItem.getDescription());
    }
  }
}
