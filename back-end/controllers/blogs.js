const mongoose   = require('mongoose');
const Blog       = mongoose.model('Blog');
const readingTime = require('reading-time');
const blog = require('../db/models/blog');

processBlogs = (blogs) => {


    const processedBlogsJson =
    {
        "graphics": {
            no_series: new Array()
        },
        "game/engine dev": {
            no_series: new Array()
        },
        "other dev": {
            no_series: new Array()
        },
        "music and arts": {
            no_series: new Array()
        },
        "life": {
            no_series: new Array()
        },
        "courses": {
            no_series: new Array()
        }
    }

    for (let blog of blogs)
    {
        const postType = blog.postType;
        const series   = blog.series;

        if (series === "")
        {
            
            processedBlogsJson[postType]["no_series"].push(JSON.stringify(blog));
        }
        else if(processedBlogsJson[postType][series] == undefined)
        {
            processedBlogsJson[postType][series] = new Array();
            processedBlogsJson[postType][series].push(JSON.stringify(blog));
        }
        else
        {
            processedBlogsJson[postType][series].push(JSON.stringify(blog));
        }            



    }

    return processedBlogsJson;
}


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
                series: blogData.series,
                updatedAt: blogData.updatedAt,
                frontMatter: {
                    wordCount: blogData.content.split(/\s+/gu).length,
                    readingTime: readingTime(blogData.content)
                }
            },
            ...allBlogs
        ]
    }, []);

    const processedBlogs = processBlogs(reducedBlogs);

    return res.json(processedBlogs);
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
                series: blogData.series,
                updatedAt: blogData.updatedAt,
                frontMatter: {
                    wordCount: blogData.content.split(/\s+/gu).length,
                    readingTime: readingTime(blogData.content)
                }                
            },
            ...allBlogs
        ]
    }, []);    

    const processedBlogs = processBlogs(reducedBlogs);

    return res.json(processedBlogs);
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
                series: blogData.series,
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

