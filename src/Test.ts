export class Test {
  public header: string;
  constructor() {
    this.header = "Hello, ";
  }
  public echo(str: string): void {
    Logger.log(`${this.header}${str}`);
  }
}
