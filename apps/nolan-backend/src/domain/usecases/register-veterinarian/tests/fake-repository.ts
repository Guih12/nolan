import { Veterinarian } from '../../../entities/veterinarian';
import { VeterinarianRepository } from '../../../repositories/veterinarian-repository';

export class FakeRepository implements VeterinarianRepository {
  veterinarians: any[] = [
    {
      id: '1',
      name: 'some name',
      lastName: 'last name',
      phoneNumber: '3333333',
      email: '',
      crvm: '3323232',
      passwor: '12345678',
    },
  ];

  async create(input: any): Promise<any> {
    return input;
  }

  async findByEmail(email: string): Promise<Veterinarian> {
    const veterinarian = this.veterinarians.find((v) => v.email === email);
    if (!veterinarian) {
      return null;
    }
    return new Veterinarian(veterinarian);
  }
}
