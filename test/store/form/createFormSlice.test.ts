import { createFormSlice, setValue} from '../../../src/store/form/createFormSlice';


describe('Pruebas en Journal createFormSlice', () => { 

    beforeEach( () => {
        jest.clearAllMocks()
    })

    test('Debe de retornar el estado inicial', () => {
        const state = createFormSlice.reducer(undefined, {
            type: 'default'
        })
        expect(state).toEqual({
            id: '',
            title: '',
            content: '',
        })
    })

    test('Debe de setear el valor del formulario', () => {
        const state = createFormSlice.reducer({
            id: '',
            title: '',
            content: '',
        }, setValue({
            id: '123',
            title: 'titulo',
            content: 'contenido'
        }))
        expect(state).toEqual({
            id: '123',
            title: 'titulo',
            content: 'contenido'
        })
    })
})