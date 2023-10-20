/**
 * Returns 'hi' or a custom message
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
 * Returns 'goodbye' or a custom message
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
