const fs       = require('fs');
const readline = require('readline');
const Blog     = require('../db/models/blog');
const path     = require('path');
const matter   = require('gray-matter');
const mongoose = require('mongoose');


const root = process.cwd();

function getAnswer(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    return new Promise(resolve => rl.question(query, ans=> {
        rl.close();
        resolve(ans);
    }));
}

class BlogClass {



    async addOrUpdateBlog(blogName, blogPath)
    {
        const fileSource = fs.readFileSync(blogPath);

        const { data, content } = matter(fileSource);

        const blogSlug = blogName.replace('.mdx', '');        
        const blogInstance = await Blog.findOne({slug : blogSlug});

        if (blogInstance === null)
        {            
            try {
                console.log('Blog not found, trying to create a new one');

                await Blog.create({
                    slug         : blogSlug,
                    title        : data.title,
                    publishedAt  : data.publishedAt,
                    summary      : data.summary,
                    headImageUrl : data.headImageUrl,
                    highlighted  : data.highlighted,
                    postType     : data.postType,
                    series       : data.series,
                    status       : data.status,
                    updatedAt    : Date.now(),
                    content      : content                 
                });                
                console.log('New blog has been created.');
            } catch (error) {
                console.log('Error: Blog could not be created.');
                console.log(error);
            }
        }
        else
        {
            blogInstance.title        = data.title;
            blogInstance.publishedAt  = data.publishedAt;
            blogInstance.summary      = data.summary;
            blogInstance.headImageUrl = data.headImageUrl;
            blogInstance.highlighted  = data.highlighted;
            blogInstance.postType     = data.postType;
            blogInstance.series       = data.series;
            blogInstance.status       = data.status;
            blogInstance.updatedAt    = Date.now();
            blogInstance.content      = content;

            try {
                await blogInstance.save();
                console.log('Blog has been successfully updated.')
            } catch (error) {
                console.log('Error: Could not update the blog.')
                console.log(error);
            }            

        }
    }


    async run()
    {

        const dirPath = path.join(root, 'blogs');
    
        mongoose.connect("mongodb+srv://test:testtest@cluster0.trrn4.mongodb.net/portfolioDb?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, async (err) => {
            if(err) {
                console.error(err);
            }
            else {
                console.log("***** Blog Adder Started *****")    
                console.log('> Starting  DB connection...');

                while(true) {
                    const blogName = await getAnswer("Give a blog file name: ");
        
                    const fullPath = path.join(dirPath, blogName);

                    if(fullPath === "exit")
                        break;
        
                    await this.addOrUpdateBlog(blogName, fullPath);
                }

                await mongoose.connection.close();
                console.log('> Disconnected from DB');
                console.log("***** Blog Adder Stopped *****")
            }
        })    
    }

}


if (require.main === module)
{
    const blogClass = new BlogClass();
    blogClass.run();    
}