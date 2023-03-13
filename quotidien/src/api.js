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
    async post(url, body) {
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };
        return (await axios.post(`${this.baseURL}${url}`, body));
      }
    async createEvent(content) {
        return await this.post("evenements", content)
    }
}

export const api = new Api("http://localhost:3000/");