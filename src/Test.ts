export class Test {
  header: String;
  constructor() {
    this.header = 'Hello, ';
  }
  echo(str: String): void {
    Logger.log(`${this.header}${str}`);
  }
}