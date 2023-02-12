import BlogApi from "lib/api/blogs";

export default async function getUserBlogs(req : any, res : any) {
    try {
        /*const session = await auth0.getSession(req, res);
        const accessToken = session?.accessToken; */
        // const json = await new BlogApi(accessToken).getByUser(); FIX THIS ASAP
        // return res.json(json.data);
    } catch(error : any) {
        return res.status(error.status || 422).json(error.response.data);
    }
}