import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Swal from 'sweetalert2';

export const apiInstance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 12000,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    },
});

// Interceptor de solicitudes (request interceptor)
apiInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
});
  
  // Interceptor de respuestas (response interceptor)
  apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        Swal.fire({
          title: 'Error',
          text: `${error.response.status} : Por favor vulva a intentar mas tarde`,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 5000
        })
      } else if (error.request) {

        console.error('No response received:', error.request);
      } else {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 5000
        })
      }
      return Promise.reject(error);
    }
  );