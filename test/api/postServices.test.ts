import { getData, deleteData, putData } from './../../src/api/postServices';
import { apiInstance } from '../../src/api/apiInstance';

jest.mock('../../src/api/apiInstance')

describe('Pruebas para la funcion postServices', () => {

    const mockResponse = {
        data: [
            {
                id: "1",
                title: "Titulo 1",
                content: "Contenido 1",
            },
            {
                id: "2",
                title: "Titulo 2",
                content: "Contenido 2",
            },
        ],
      };


    afterEach(() => {
        jest.clearAllMocks();
    });

    test('debe obtener los comentarios de la API', async() => {  
        apiInstance.get = jest.fn().mockResolvedValue(mockResponse);
        const response = await getData('/prueba');

        expect(response).toEqual(mockResponse.data);
    })

    test('debe eliminar un comentario de la API', async() => {
        apiInstance.delete = jest.fn().mockResolvedValue(mockResponse);
        const response = await deleteData('/prueba');

        expect(response).toEqual(mockResponse.data);
    })

    test('debe actualizar un comentario de la API', async() => {
        apiInstance.put = jest.fn().mockResolvedValue(mockResponse);
        const response = await putData('/prueba', mockResponse.data[0]);

        expect(response).toEqual(mockResponse.data);
    })

})
