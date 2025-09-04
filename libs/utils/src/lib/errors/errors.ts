/**
 * @group Errors
 */
export abstract class BaseError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context: string
  ) {
    super(message);
  }
}

/**
 * @group Errors
 */
export class EmptyStringError extends BaseError {
  constructor(message = 'Empty string', context = 'string') {
    super(message, EmptyStringError.name, context);
  }
}

/**
 * @group Errors
 */
export class EmptyArrayError extends BaseError {
  constructor(message = 'Empty array', context = 'array') {
    super(message, EmptyArrayError.name, context);
  }
}

/**
 * @group Errors
 */
export class InvalidNameError extends BaseError {
  constructor(message = 'Invalid name', context = 'string') {
    super(message, InvalidNameError.name, context);
  }
}

/**
 * @group Errors
 */
export class NotStringError extends BaseError {
  constructor(message = 'Value is not a type of string!', context = 'string') {
    super(message, NotStringError.name, context);
  }
}

/**
 * @group Errors
 */
export class UndefinedError extends BaseError {
  constructor(message = 'Value is undefined', context = 'common') {
    super(message, UndefinedError.name, context);
  }
}

/**
 * @group Errors
 */
export class NullError extends BaseError {
  constructor(message = 'Value is null', context = 'common') {
    super(message, NullError.name, context);
  }
}

/**
 * @group Errors
 */
export class NotSupportedError extends BaseError {
  constructor(message = 'Error Message', context = 'error') {
    super(message, NotSupportedError.name, context);
  }
}
