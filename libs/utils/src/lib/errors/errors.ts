export abstract class BaseError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context: string
  ) {
    super(message);
  }
}

export class EmptyStringError extends BaseError {
  constructor(message = 'Empty string', context = 'string') {
    super(message, EmptyStringError.name, context);
  }
}
export class InvalidNameError extends BaseError {
  constructor(message = 'Invalid name', context = 'string') {
    super(message, InvalidNameError.name, context);
  }
}
