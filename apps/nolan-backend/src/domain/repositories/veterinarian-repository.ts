import { Veterinarian } from '../entities/veterinarian';

export interface VeterinarianRepository {
  create(input: any): Promise<any>;
  findByEmail(email: string): Promise<Veterinarian>;
}
