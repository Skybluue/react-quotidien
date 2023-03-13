import axios from 'axios';

export default class Api {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get(URL) {
        return (await axios.get(`${this.baseURL}${URL}`)).data;
    }
    async getEvenements() {
        return await this.get("evenements");
    }
}

export const api = new Api("http://localhost:3000/");