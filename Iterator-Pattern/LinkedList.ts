export class List {
  head;
  next;
  constructor() {
  }
  add(item: any) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
      return node;
    }
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
    }
    cur.next = node;
    return node;
  }
}

export class Node {
  next;
  constructor(private data) {
    this.data = data;
    this.next = null
  }
}