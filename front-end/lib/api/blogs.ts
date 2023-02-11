import axios from "axios";
import BaseApi from "lib/api/BaseApi";

class BlogApi extends BaseApi {
    constructor(accessToken? : any) {
        super(accessToken, '/blogs');
    }

    getHighlighted() {
        return axios.get(`${this.apiUrl}/highlighted`);
    }

    getByType(type : any) {
        return axios.get(`${this.apiUrl}/t/${type}`);
    }
    
};

export default BlogApi;