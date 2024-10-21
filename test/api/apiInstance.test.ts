import { act } from '@testing-library/react';
import { apiInstance } from '../../src/api/apiInstance';
import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';

const mockCreate = jest.fn(() => ({
  interceptors: {
    request: { use: jest.fn() },
    response: { use: jest.fn() }
  }
}));

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  create: jest.fn(() => ({
      interceptors: {
          request: {
              use: jest.fn()
          },
          response: {
              use: jest.fn()
          }
      }
  }))
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

describe('Configuración de la instancia de Axios', () => {

   
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debería tener los interceptor de solicitud especificados', () => {

    const useSpy = jest.spyOn(apiInstance.interceptors.request, 'use');

    apiInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    expect(useSpy).toHaveBeenCalled();

    expect(useSpy).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function)
    );

    useSpy.mockRestore();
  })
})
