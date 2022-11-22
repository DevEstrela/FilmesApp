import axios from 'axios';   /* axios serve para aquisicoes */


const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;