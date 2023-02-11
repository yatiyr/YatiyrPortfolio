import {useEffect} from 'react';
import {useRouter} from 'next/router';

const Redirect = ({ssr, to} : any) => {
    const router = useRouter();

    useEffect(() => {
        if(ssr) {
            window.location.pathname = to;
        }
        else {
            router.push(to);
        }
    }, []);

    return null;
}

export default Redirect;