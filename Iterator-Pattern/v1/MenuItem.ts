export class MenuItem {
  constructor(private name: string, private description: string, private vegetarian: boolean, private price: number) {}

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  getPrice(): number {
    return this.price;
  }
}