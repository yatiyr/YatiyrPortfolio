import BaseLayout from 'components/layouts/BaseLayout';
import IndexMain from 'components/sections/IndexMain';
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";
import BlogApi from 'lib/api/blogs';

const Home = (props : any) => {

  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        page="Home">
        <IndexMain highlightedBlogs={props.blogs}/>                                                                                                             
      </BaseLayout>
    </>
  )
}

export async function getStaticProps() {
  const json = await new BlogApi().getHighlighted();

  return {
    props: {blogs: json.data},
    revalidate: 60
  };
  
}

export default Home;