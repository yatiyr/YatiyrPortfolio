import auth0 from 'utils/auth0';

export default async function logout(req : any, res : any) {
    try {
        await auth0.handleLogout(req, res);
    } catch(error : any) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}