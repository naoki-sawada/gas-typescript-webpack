import Test from './Test';
import { config } from 'config';

global.test = () => {
  const test = new Test();
  test.echo(`${config.example} world.`);
};
