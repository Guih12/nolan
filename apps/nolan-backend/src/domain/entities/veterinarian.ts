import { uuidv7 } from 'uuidv7';
import { Password } from '../value-objects/password';

export interface Params {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  crvm: string;
  password: string;
}

export class Veterinarian {
  private id: string;
  private name: string;
  private lastName: string;
  private phoneNumber: string;
  private email: string;
  private crvm: string;
  private password: Password;

  constructor(params: Params) {
    this.id = params.id ?? uuidv7();
    this.name = params.name;
    this.lastName = params.lastName;
    this.phoneNumber = params.phoneNumber;
    this.email = params.email;
    this.crvm = params.crvm;
    this.password = Password.create(params.password);
  }

  get getId(): string {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  get getLastName(): string {
    return this.lastName;
  }

  get getPhoneNumber(): string {
    return this.phoneNumber;
  }

  get getEmail(): string {
    return this.email;
  }

  get getCrvm(): string {
    return this.crvm;
  }

  get getPassword(): string {
    return this.password.getValue;
  }
}
