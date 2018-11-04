export default class Echo {
  public header: string;
  constructor() {
    this.header = "Hello, ";
  }
  public print(str: string): void {
    Logger.log(`${this.header}${str}`);
  }
}
