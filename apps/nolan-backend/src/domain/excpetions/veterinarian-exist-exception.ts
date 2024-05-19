export class VeterinarianExistException extends Error {
  constructor() {
    super('Veterinarian already exists');
  }
}
