import { List } from "../LinkedList";
import { Iterator } from "./Iterator";

export class PancakeHouseMenuIterator implements Iterator {
  head;
  current;
  constructor(private items: List) {
    this.items = items;
    this.head = this.items.head;
    this.current = this.head;
  }

  hasNext() {
    return Boolean(this.current.next);
  }

  next() {
    const data = this.current.data;
    this.current = this.current.next;
    return data;
  }
}