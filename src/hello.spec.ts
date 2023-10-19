import { sayGoodbye, sayHello } from './hello';

describe('sayHello', () => {
  it('Should return hi when called', () => {
    const hello = sayHello();
    expect(hello).toBe('hi');
  });

  it('Should say anything you pass', () => {
    let message = sayHello('Hello World!');
    expect(message).toBe('Hello World!');
  });
});

describe('sayGoodbye', () => {
  it('Should return goodbye when called', () => {
    const hello = sayGoodbye();
    expect(hello).toBe('goodbye');
  });

  it('Should say anything you pass', () => {
    let message = sayHello('Goodbye World!');
    expect(message).toBe('Goodbye World!');
  });
});
