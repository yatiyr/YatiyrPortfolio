import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue, Flex } from "@chakra-ui/react";
import BlogInfoBox from 'components/ui/BlogInfoBox';
import { Box } from '@chakra-ui/react';
import BlogApi from 'lib/api/blogs';
import dateFormat from 'dateformat';

const Blog = (props : any) => {
  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("purple.600", "purple.400");
  const imageBackgroundColor = useColorModeValue("gray.300", "gray.700")

  return (
    <BaseLayout
      user={data}
      loading={loading}
      backgroundColor={backgroundColor}
      page="Blog">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          justifySelf="center"
          alignItems="center"
          minHeight="100vh"
          mx={{sm: "0px", lmd: "0px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}}          >
            {props.blogs.map((blog : any, index : any) => (
              <BlogInfoBox
                key={index}
                imagePath={blog.headImageUrl}
                title={blog.title}
                date={dateFormat(blog.publishedAt, "dddd, mmm dS, yyyy")}
                description={blog.summary}
                owner="erendere"
                slug={blog.slug}
                headingColor={headingColor}
                paragraphColor={paragraphColor}
                linkHoverColor={linkHoverColor}
                imageBackgroundColor={imageBackgroundColor}/>
              ))}
        </Box>
      </BaseLayout>
  )

}

export async function getStaticProps() {
  //const blogs = await getAllFilesFrontMatter('blog');
  const json = await new BlogApi().getAll();

  return {
    props: {blogs: json.data},
    revalidate: 60
  };

}

export default Blog;