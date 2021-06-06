export class Singleton { // Lazily created instance, instance will be created lazily when you call getInstance method during runtime
  public static singleInstance: Singleton;
  private constructor() {}

  public static getInstance() {
    if (!this.singleInstance) {
      this.singleInstance = new Singleton();
    }
    return this.singleInstance;
  }
}

export class SingletonEager { // Eagerly created instance, instance is created upfront during compile time
  public static singleInstance: SingletonEager = new SingletonEager();
  private constructor() {}

  public static getInstance() {
    return this.singleInstance;
  }
}