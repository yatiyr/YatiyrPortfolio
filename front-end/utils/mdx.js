import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';

import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import remarkCodeTitles from "remark-code-titles";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import BlogApi from 'lib/api/blogs';

const root = process.cwd();

export async function getFiles(type) {
    return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {

    const json = await new BlogApi().getBySlug(slug);
    const data = json.data;
    
    const mdxSource = await serialize(data.content, {
        mdxOptions: {
          remarkPlugins: [
            remarkSlug,
            remarkMath,
            [
                rehypeAutolinkHeadings,
              {
                linkProperties: {
                  className: ['anchor']
                }
              }
            ],
            remarkCodeTitles
          ],
          rehypePlugins: [mdxPrism, rehypeKatex]
        }
      });
    
      return {
        mdxSource,
        frontMatter: {
          headImageUrl: data.headImageUrl,
          highlighted: data.highlighted,
          publishedAt: data.publishedAt,
          summary: data.summary,
          title: data.title,          
          wordCount: data.content.split(/\s+/gu).length,
          readingTime: readingTime(data.content),
          slug: slug || null
        }
      };    
}

export async function getAllFilesFrontMatter(type) {
    const files = fs.readdirSync(path.join(root, 'data', type));

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
        const { data, content } = matter(source);
    
        return [
          {
            ...data,
            slug: postSlug.replace('.mdx', ''),
            frontMatter: {
              wordCount: content.split(/\s+/gu).length,
              readingTime: readingTime(content)
            }
          },
          ...allPosts
        ];
      }, []);    
}

export async function getAllHighlightsFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
      const { data, content } = matter(source);
  
      if(data.highlighted === 'true') {
        return [
          {
            ...data,
            slug: postSlug.replace('.mdx', ''),
            frontMatter: {
              wordCount: content.split(/\s+/gu).length,
              readingTime: readingTime(content)
            }
          },
          ...allPosts
        ];
      } else {
        return [
          ...allPosts
        ]
      }

    }, []);    
}

export async function parseMDXString(source) {

    const { data, content } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                remarkSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        linkProperties: {
                            className: ['anchor']
                        }
                    }
                ],
                remarkCodeTitles
            ],
            rehypePlugins: [mdxPrism]
        }
    });

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: "slug" || null,
            data
        }
    };
}