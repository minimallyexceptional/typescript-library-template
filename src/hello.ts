export function sayHello(message?: string) {
  if (message) {
    return message;
  } else {
    return 'hi';
  }
}

export function sayGoodbye(message?: string) {
  let hello = 'hell';

  if (message) {
    return message;
  } else {
    return 'goodbye';
  }
}
