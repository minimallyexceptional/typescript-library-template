/**
 * Wraps the message you send to it with a hello
 *
 * @param message Optional string to send a custom message
 * @returns A custom message or "hi" if no message is provdided
 */
export function sayHello(message?: string) {
  if (message) {
    return message;
  } else {
    return 'hi';
  }
}

/**
 * Wraps the message you send to it with a goodbye
 *
 * @param message Optional string to send a custom message
 * @returns A custom message or "goodbye" if no message is provdided
 */
export function sayGoodbye(message?: string) {
  if (message) {
    return message;
  } else {
    return 'goodbye';
  }
}
