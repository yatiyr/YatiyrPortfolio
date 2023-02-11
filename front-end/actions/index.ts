import {useState} from 'react';

export const fetcher = (url : any) =>
    fetch(url).then(async res => {
        const result = await res.json();

        if(res.status !== 200) {
            return Promise.reject(result);
        }
        else {
            return result;
        }
    });

export function useApiHandler(apiCall : any) {

    const [reqState, setReqState] = useState({
        error  : null,
        data   : null,
        loading: false
    });

    const handler = async(...data : any) => {
        setReqState({error: null, data: null, loading: true});
        try {
            const json = await apiCall(...data);
            setReqState({error: null, data: json.data, loading: false});
            return json.data;
        }
        catch(error : any) {
            const message = (error.response && error.response.data) || 'Ooopsie poopsie, something went wrong...'
            setReqState({error: message, data: null, loading: false});
            return Promise.reject(message);
        }
    }

    return [handler, {...reqState}];
}