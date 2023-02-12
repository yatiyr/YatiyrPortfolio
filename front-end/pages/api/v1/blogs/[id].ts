import BlogApi from "lib/api/blogs";

export default async function handleBlog(req : any, res : any) {
    if(req.method === 'GET') {
        const json = await new BlogApi().getById(req.query.id);
        return res.json(json.data);
    }

    else if(req.method === 'PATCH') {
        try {
            /*const session= await auth0.getSession(req, res);
            const accessToken = session?.accessToken;*/
            //const json = await new BlogApi(accessToken).update(req.query.id, req.body); TODO: FIX THIS ASAP
            //return res.json(json.data);
        } catch(error : any) {
            return res.status(error.status || 422).json(error.response.data);
        }
    }
}