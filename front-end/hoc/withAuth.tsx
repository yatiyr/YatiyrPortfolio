
import {useGetUser} from 'actions/user';
import Redirect from 'components/shared/Redirect';
import { isAuthorized } from 'utils/auth0';

const withAuth = (Component : any) => (role : any) => {

    return (props : any) => {
        const {data, loading} = useGetUser();

        if(loading) {
            return <p>Loading...</p>
        }

        if(!data) {
            return <Redirect ssr to="/api/v1/loging"/>
        }
        else {
            if(role && !isAuthorized(data, role)) {
                return <Redirect ssr to="/api/v1/login"/>
            }
            return <Component user={data} loading={loading} {...props}/>
        }
    }
}