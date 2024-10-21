// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch';// <-- yarn add whatwg-fetch

//Configuracion para las variables de entorno
require('dotenv').config({
    path: '.env'
})

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}))