import { InvalidPasswordException } from '../excpetions/invalid-password-exception';

export class Password {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  get getValue(): string {
    return this.value;
  }

  static create(value: string): Password {
    if (value.length < 8) {
      throw new InvalidPasswordException();
    }
    return new Password(value);
  }
}
