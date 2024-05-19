import { VeterinarianRepository } from 'src/domain/repositories/veterinarian-repository';
import { RegisterVeterinarianInput } from './register-veterinarian-input';
import { RegisterVeterinarianOutput } from './register-veterinarian-output';
import { Veterinarian } from '../../entities/veterinarian';
import { VeterinarianExistException } from '../../excpetions/veterinarian-exist-exception';

export class RegisterVeterinarian {
  constructor(
    private readonly veterinarianRepository: VeterinarianRepository,
  ) {}

  async execute(
    input: RegisterVeterinarianInput,
  ): Promise<RegisterVeterinarianOutput> {
    const veterinarian = new Veterinarian(input);

    const veterinarianExists = await this.veterinarianRepository.findByEmail(
      veterinarian.getEmail,
    );

    if (veterinarianExists) {
      throw new VeterinarianExistException();
    }

    await this.veterinarianRepository.create(input);
    return {
      name: input.name,
      lastName: input.lastName,
      phoneNumber: input.phoneNumber,
      email: input.email,
      crvm: input.crvm,
    };
  }
}
