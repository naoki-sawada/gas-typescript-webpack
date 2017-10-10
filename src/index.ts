import { config } from "config";
import Test from "./Test";

global.test = () => {
  const test = new Test();
  test.echo(`${config.example} world.`);
};
