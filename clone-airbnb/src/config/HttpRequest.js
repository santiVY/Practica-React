//Archivo donde va a configurar la peticion que se va mandar al servidor
//con esto podemos invocar esta funcion donde quiera que necesitemos realizar una solicitud http

import axios from 'axios'

const URL_BASE = 'http://localhost:3001'

//async await volver un proceso asincronico a sincronico

export const requestHttp = async (method, endpoint, body = {}, params = {}) => {
    try{
        const url = `${URL_BASE}${endpoint}`
        const options = {
            method, //method: method
            url,
            data: body,
            params
        }

        const response = await axios(options)
        const { data } = response
        return data
    }catch (error) {
        throw error 
    }
}