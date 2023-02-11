const mongoose   = require('mongoose');
const Blog       = mongoose.model('Blog');
const readingTime = require('reading-time');

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({publishedAt: 1});
    const reducedBlogs = blogs.reduce((allBlogs, blogData) => {
        return [
            {
                slug: blogData.slug,
                title: blogData.title,
                publishedAt: blogData.publishedAt,
                summary: blogData.summary,
                headImageUrl: blogData.headImageUrl,
                highlighted: blogData.highlighted,
                postType: blogData.postType,
                updatedAt: blogData.updatedAt,
                frontMatter: {
                    wordCount: blogData.content.split(/\s+/gu).length,
                    readingTime: readingTime(blogData.content)
                }
            },
            ...allBlogs
        ]
    }, []);

    return res.json(reducedBlogs);
}

exports.getHighlightedBlogs = async (req, res) => {
    const blogs = await Blog.find({highlighted: "true"}).sort({publishedAt: 1});
    const reducedBlogs = blogs.reduce((allBlogs, blogData) => {
        return [
            {
                slug: blogData.slug,
                title: blogData.title,
                publishedAt: blogData.publishedAt,
                summary: blogData.summary,
                headImageUrl: blogData.headImageUrl,
                highlighted: blogData.highlighted,
                postType: blogData.postType,
                updatedAt: blogData.updatedAt,
                frontMatter: {
                    wordCount: blogData.content.split(/\s+/gu).length,
                    readingTime: readingTime(blogData.content)
                }                
            },
            ...allBlogs
        ]
    }, []);    

    return res.json(reducedBlogs);
}

exports.getBlogsByPostType = async (req, res) => {
    const blogs = await Blog.find({postType: req.params.postType}).sort({publishedAt: 1});
    const reducedBlogs = blogs.reduce((allBlogs, blogData) => {
        return [
            {
                slug: blogData.slug,
                title: blogData.title,
                publishedAt: blogData.publishedAt,
                summary: blogData.summary,
                headImageUrl: blogData.headImageUrl,
                highlighted: blogData.highlighted,
                postType: blogData.postType,
                updatedAt: blogData.updatedAt,
                frontMatter: {
                    wordCount: blogData.content.split(/\s+/gu).length,
                    readingTime: readingTime(blogData.content)
                }
            },
            ...allBlogs
        ]
    }, []);

    return res.json(reducedBlogs);
}


exports.getBlogBySlug = async (req, res) => {
    const blog = await Blog.findOne({slug: req.params.slug});
    return res.json(blog);
}

