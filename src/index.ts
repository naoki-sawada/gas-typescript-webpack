import { Test } from './Test';

global.test = () => {
  const test = new Test();
  test.echo('world.');
};
