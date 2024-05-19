import { VeterinarianRepository } from 'src/domain/repositories/veterinarian-repository';
import { RegisterVeterinarian } from '../register-veterinarian';
import { FakeRepository } from './fake-repository';

const makeSut = (methodRepository: keyof VeterinarianRepository) => {
  const fakeRepository = new FakeRepository();
  const spyOn = jest.spyOn(fakeRepository, `${methodRepository}`);
  const sut = new RegisterVeterinarian(fakeRepository);
  return {
    sut,
    spyOn,
  };
};

const factoryVeterinarian = (params: any) => {
  return {
    name: params.name ?? 'some name',
    lastName: params.lastName ?? 'last name',
    phoneNumber: params.phoneNumber ?? '3333333',
    email: params.email ?? 'another_email@gmail.com',
    crvm: params.crvm ?? '3323232',
    password: params.password ?? '12345678',
  };
};

describe('RegisterVeterinarian', () => {
  test('should return a new veterinarian if all data is valid', async () => {
    const registerVeterinarianInput = factoryVeterinarian({});
    const { sut, spyOn } = makeSut('create');
    const response = await sut.execute(registerVeterinarianInput);

    expect(spyOn).toHaveBeenCalled();
    expect(response.name).toBe(registerVeterinarianInput.name);
    expect(response.lastName).toBe(registerVeterinarianInput.lastName);
    expect(response.phoneNumber).toBe(registerVeterinarianInput.phoneNumber);
    expect(response.email).toBe(registerVeterinarianInput.email);
  });
  test('should return error if password is invalid', async () => {
    const registerVeterinarianInput = factoryVeterinarian({ password: '123' });

    const { sut, spyOn } = makeSut('create');
    const response = sut.execute(registerVeterinarianInput);
    await expect(response).rejects.toThrow(
      'Password must have at least 8 characters',
    );

    expect(spyOn).not.toHaveBeenCalled();
  });
  test('should return error if email is already in use', async () => {});
  test('should return error if CRVM is invalid', () => {});
});
