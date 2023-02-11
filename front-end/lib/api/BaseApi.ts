import axios from 'axios';

class BaseApi {

    config : any;
    apiUrl : any;

    constructor(accessToken? : any, subPath? : any) {

        this.config = {};

        if(accessToken) {
            this.config.header = {
                authorization: `Bearer ${accessToken}`
            }
        }

        this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
    }

    getAll() {
        return axios.get(this.apiUrl);
    }

    getById(id : any) {
        return axios.get(`${this.apiUrl}/${id}`);
    }

    getBySlug(slug : any) {
        return axios.get(`${this.apiUrl}/s/${slug}`);
    }

};

export default BaseApi;