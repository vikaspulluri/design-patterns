export abstract class Beverage {
  public description: string = 'Unknown Description!';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
