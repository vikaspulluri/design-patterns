import { List } from "../LinkedList";
import { Iterator } from "./Iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenuIterator } from "./PancakeHouseMenuIterator";

export class PancakeHouseMenu implements Menu {
  menuItems = new List();

  constructor() {
    this.addItem('Regular Pancake Breakfast', 'Pancakes with fired eggs', true, 50);
    this.addItem('Special Pancake Breakfast', 'Pancakes with fired chicken', false, 80);
    this.addItem('Waffles', 'Waffles with Blueberries and Blackberries', true, 60);
    this.addItem('Strawberry Pancakes', 'Pancakes with Strawberries', true, 70);
    this.addItem('Chicken Sausage Pancake', 'Pancakes with Sausage Chicken', false, 100);    
  }

  addItem(name: string, description: string, vegeratian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegeratian, price);
    this.menuItems.add(menuItem);
  }

  createIterator(): Iterator {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}
