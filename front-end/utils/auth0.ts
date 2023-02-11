import { initAuth0 } from "@auth0/nextjs-auth0";

const auth0 = initAuth0({


    baseURL               : process.env.AUTH0_BASE_URL,
    issuerBaseURL         : process.env.AUTH0_ISSUER_BASE_URL,
    clientID              : process.env.AUTH0_CLIENT_ID,
    clientSecret          : process.env.AUTH0_CLIENT_SECRET,
    secret                : process.env.AUTH0_SECRET,
    clockTolerance        : 60,
    httpTimeout           : 5000,
    authorizationParams   : {
        scope    : 'openid profile',
        audience : process.env.AUTH0_AUDIENCE 
    },

    routes                : {
        callback           : process.env.AUTH0_REDIRECT_URI,
        postLogoutRedirect : '/'        
    },

    session               : {
        rollingDuration  : 60 * 60 * 24,
        absoluteDuration : 60 * 60 * 24 * 7
    }

});

export default auth0;

export const isAuthorized = (user : any, role : any) => {
    return (user && user[process.env.AUTH0_NAMESPACE + '/roles'].includes(role));
}

export const authorizeUser = async (req : any, res : any) => {
    const session = await auth0.getSession(req, res);

    if(!session || !session.user) {
        res.writeHead(302, {
            Location: '/api/v1/login'
        });
        res.end();
        return null;
    }

    return session.user;
}

export const withAuth = (getData : any) => (role : any) => async ({req , res} : any) => {
    const session = await auth0.getSession(req, res);
    if(!session || !session.user || (role && !isAuthorized(session.user, role))) {
        res.writeHead(302, {
            Location: '/api/v1/login'
        });
        res.end();
        return {props: {}};
    }

    const data = getData ? await getData({req, res}, session.user) : {};

    return {props: {user: session.user, ...data}};
}