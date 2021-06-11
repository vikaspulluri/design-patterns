import { Iterator } from "./Iterator";
import { MenuItem } from "./MenuItem";

export class DinerMenuIterator implements Iterator {
  position: number = 0;

  constructor(private items: MenuItem[]) {
    this.items = items;
  }

  hasNext() {
    return !(this.position >= this.items.length || !this.items[this.position]);
  }

  next() {
    const menuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }
}