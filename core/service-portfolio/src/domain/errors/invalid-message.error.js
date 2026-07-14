export class InvalidMessageError extends Error {
  constructor(reason) {
    super(reason);
    this.name = 'InvalidMessageError';
  }
}
