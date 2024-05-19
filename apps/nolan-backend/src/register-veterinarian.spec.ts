export class RegisterVeterinarian {
  incrementCalls = 0;
  async execute(params: any): Promise<any> {
    if (params.password.length < 8) {
      throw new Error('Password must have at least 8 characters');
    }

    this.incrementCalls++;
    return params;
  }
}

describe('RegisterVeterinarian', () => {
  test('should return error if email is already in use', () => {});
  test('should return error if CRVM is invalid', () => {});
  test('should return error if password is invalid', async () => {
    const registerVeterinarianInput = {
      name: 'some name',
      lastName: 'last name',
      birthDate: Date.now(),
      phoneNumber: '3333333',
      email: 'some_email@gmail.com',
      crvm: '3323232',
      password: '',
    };
    const sut = new RegisterVeterinarian();
    const result = sut.execute(registerVeterinarianInput);
    await expect(result).rejects.toThrow(
      'Password must have at least 8 characters',
    );
  });
  test('should return a new veterinarian if all data is valid', async () => {
    const registerVeterinarianInput = {
      name: 'some name',
      lastName: 'last name',
      birthDate: Date.now(),
      phoneNumber: '3333333',
      email: 'some_email@gmail.com',
      crvm: '3323232',
      password: '12345678',
    };
    const sut = new RegisterVeterinarian();
    await sut.execute(registerVeterinarianInput);

    expect(sut.incrementCalls).toBe(1);
  });
});
