import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug } from "utils/mdx";

import MDXComponents from 'components/mdx';
import BlogLayout from "components/layouts/BlogLayout";
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";
import BlogApi from "lib/api/blogs";


import Giscus from "@giscus/react";


const BlogContent = (props : any) => {
    const data  = "user"; //useGetUser();
    const loading = false;

    const backgroundColor = useColorModeValue("white", "gray.900");

    const giscusColor = useColorModeValue("Light", "Dark");

    return (
        <>
            <BlogLayout
                user={data}
                loading={loading}
                backgroundColor={backgroundColor}
                frontMatter={props.frontMatter}
                page={`blog/${props.frontMatter.slug}`}>
                    <MDXRemote {...props.mdxSource} components={{...MDXComponents}} />
                    <Giscus
                        id="comments"
                        repo="yatiyr/giscus-comment"
                        repoId="R_kgDOI-bJpw"
                        category="Announcements"
                        categoryId="DIC_kwDOI-bJp84CUPc-"
                        mapping="url"
                        data-strict="0"
                        term="Welcome to @giscus/react component!"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme={`${process.env.PORTFOLIO_API_URL}/media/styles/giscus${giscusColor}.css`}
                        lang="en"
                        loading="lazy"
                        />                    
            </BlogLayout>
        </>
    )
}

export async function getStaticPaths() {
    const json = await new BlogApi().getAll();
    const blogs = json.data;

    let processedBlogs = new Array();

    const typeKeys = Object.keys(blogs);

    for(let typeKey of typeKeys)
    {
        const seriesKeys = Object.keys(blogs[typeKey]);

        for (let seriesKey of seriesKeys)
        {
            for(let obj of blogs[typeKey][seriesKey])
            {
                let parsed = JSON.parse(obj);
                processedBlogs.push(parsed);
            }
        }
    }

    return {
        paths: processedBlogs.map((p : any) => ({
            params: {
                slug: p.slug
            }
        })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({params} : any) {
    const blog = await getFileBySlug('blog', params.slug);

    return {
        props: {...blog},
        revalidate: 60
    }
}


export default BlogContent;