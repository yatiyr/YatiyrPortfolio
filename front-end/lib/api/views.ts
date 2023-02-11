import axios from "axios";
import BaseApi from "lib/api/BaseApi";

class ViewApi extends BaseApi {
    constructor(accessToken? : any) {
        super(accessToken, '/views');
    }

    saveView(data : any) {
        return axios.post(`${this.apiUrl}?page=${data.page}&countryCode=${data.country_code}&countryName=${data.country_name}&city=${data.city}&postal=${data.postal}&latitude=${data.latitude}&longitude=${data.longitude}&IPv4=${data.IPv4}&state=${data.state}`)
    }
    
};

export default ViewApi;