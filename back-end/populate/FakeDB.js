const Blog = require('../db/models/blog');
const fs   = require('fs');
const path = require('path');
const matter = require('gray-matter');


const root = process.cwd();

class FakeDB {

    async clean() {
        await Blog.deleteMany({});
    }

    async addData() {
        const files = fs.readdirSync(path.join(root, 'data'));

        const blogs = files.reduce((allPosts, postSlug) => {
            const source = fs.readFileSync(path.join(root, 'data', postSlug), 'utf8');
            const { data, content } = matter(source);

            return [
                {
                    slug: postSlug.replace('.mdx', ''),                    
                    ...data,
                    content: content,
                },
                ...allPosts
            ];
        }, []);

        await Blog.create(blogs);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}


module.exports = new FakeDB();