export class RegisterVeterinarian {
  async execute(params: any): Promise<any> {
    return params;
  }
}

describe('RegisterVeterinarian', () => {
  test('should return error if email is already in use', () => {});
  test('should return error if email is invalid', () => {});
  test('should return error if CRVM is invalid', () => {});
  test('should return error if password is invalid', () => {});
  test('should return a new veterinarian if all data is valid', async () => {
    const registerVeterinarianInput = {
      name: 'some name',
      lastName: 'last name',
      birthDate: Date.now(),
      phoneNumber: '3333333',
      email: 'some_email@gmail.com',
      crvm: '3323232',
      password: '123456789',
    };
    const sut = new RegisterVeterinarian();
    const result = await sut.execute(registerVeterinarianInput);

    expect(result).toEqual({
      name: 'some name',
      lastName: 'last name',
      birthDate: Date.now(),
      phoneNumber: '3333333',
      email: 'some_email@gmail.com',
      crvm: '3323232',
      password: '123456789',
    });
  });
});
