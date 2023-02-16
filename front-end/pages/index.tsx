import BaseLayout from 'components/layouts/BaseLayout';
import IndexMain from 'components/sections/IndexMain';
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";
import BlogApi from 'lib/api/blogs';

const Home = (props : any) => {

  // Load user information
  const data = "user";
  const loading = false;
  const backgroundColor = useColorModeValue("white", "gray.900");

  const blogs : any = {
    "no_series": new Array()
  };


  const typeKeys = Object.keys(props.blogs);

  for(let typeKey of typeKeys)
  {
    const keys = Object.keys(props.blogs[typeKey]);

    for(let key of keys)
    {
      if(key !== "no_series")
      {
        if(!blogs[key])
          blogs[key] = new Array();
        
        for(let obj of props.blogs[typeKey][key])
        {
          let parsed = JSON.parse(obj);
          blogs[key].push(parsed);
        }
          

        // Sort series
        blogs[key].sort((a : any, b : any) => {
            
          const lastIndexB = b.slug.lastIndexOf('-') + 1;
          const slugNoB = parseInt(b.slug.slice(lastIndexB));

          const lastIndexA = a.slug.lastIndexOf('-') + 1;
          const slugNoA = parseInt(a.slug.slice(lastIndexA));

          return slugNoA - slugNoB;    
      })        
      }
      else
      {
        for(let obj of props.blogs[typeKey][key])
        {
          let parsed = JSON.parse(obj);
          blogs["no_series"].push(parsed);
        }        
      }
    }
  }

  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        page="Home">
          <IndexMain highlightedBlogs={blogs}/>   
      </BaseLayout>
    </>
  )

  /*return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        page="Home">
        <IndexMain highlightedBlogs={props.blogs}/>                                                                                                             
      </BaseLayout>
    </>
  ) */
}

export async function getStaticProps() {
  const json = await new BlogApi().getHighlighted();

  return {
    props: {blogs: json.data},
    revalidate: 60
  };
  
}

export default Home;