import { MenuItem } from "./MenuItem";
import * as chalk from 'chalk';
import { Iterator } from "./Iterator";
import { DinerMenuIterator } from "./DinerMenuIterator";
import { Menu } from "./Menu";

export class DinerMenu implements Menu {
  MAX_ITEMS: number = 6;
  numberOfItems = 0;
  menuItems: MenuItem[] = new Array(this.MAX_ITEMS);

  constructor() {
    this.addItem('Vegetarian BLT', 'Bacon with lettuce, tomato on whole wheat', true, 110);
    this.addItem('BLT', 'Bacon with lettuce, tomato on whole wheat', false, 120);
    this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 140);
    this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 160);
  }

  addItem(name: string, description: string, vegeratian: boolean, price: number) {
    if (this.numberOfItems >= this.MAX_ITEMS) {
      console.log(
        chalk.bgRed('Sorry, menu is full. Cannot add item to menu')
      );
      return;
    }
    const menuItem = new MenuItem(name, description, vegeratian, price);
    this.menuItems[this.numberOfItems] = menuItem;
    this.numberOfItems++;
  }

  createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }
}
