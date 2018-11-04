import { Test } from "./Test";

global.main = () => {
  const test = new Test();
  test.echo("world.");
};
