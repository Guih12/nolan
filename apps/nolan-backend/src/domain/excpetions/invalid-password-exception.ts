export class InvalidPasswordException extends Error {
  constructor() {
    super('Password must have at least 8 characters');
  }
}
