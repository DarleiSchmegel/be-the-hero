import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.138:3333'//Preciso voltar aqui para consertar isso
});

export default api;