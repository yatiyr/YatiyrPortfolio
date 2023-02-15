import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue, Flex, SimpleGrid } from "@chakra-ui/react";
import BlogInfoBox from 'components/ui/BlogInfoBox';
import { Box } from '@chakra-ui/react';
import BlogApi from 'lib/api/blogs';
import dateFormat from 'dateformat';


import Carousel from "@/components/thirdParty/Carousel";


import BlogsByType from '@/components/sections/BlogsByType';


const Blog = (props : any) => {
  // Load user information
  const data = "user";
  const loading = false;

  const backgroundColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("purple.600", "purple.400");
  const imageBackgroundColor = useColorModeValue("gray.300", "gray.700")


  const hbcGraphics = useColorModeValue("#A200FF4C", "#A200FF4C");
  const hcGraphics = useColorModeValue("#5C0091FF","#E1ADFFFF");
  const graphicsBC = useColorModeValue("#63009C99", "#D19FEDE8");
  const graphicsPC = useColorModeValue("#63009C99", "#D19FEDE8");


  const hbcGED = useColorModeValue("#00C2FF4C", "#00C2FF4C");
  const hcGED = useColorModeValue("#005975FF","#85E2FFFF");
  const GEDBC = useColorModeValue("#006180BF", "#85E2FFE5");
  const GEDPC = useColorModeValue("#006180BF", "#85E2FFE5");

  const hbcOD = useColorModeValue("#00FF854C", "#00FF854C");
  const hcOD = useColorModeValue("#00733CFF","#99FFCEFF");
  const ODBC = useColorModeValue("#006B38CC", "#39E693FF");
  const ODPC = useColorModeValue("#006B38CC", "#39E693FF");

  const hbcCourses = useColorModeValue("#EBFF004C", "#EBFF004C");
  const hcCourses = useColorModeValue("#444A00FF","#F7FF9EFF");
  const CoursesBC = useColorModeValue("#6A7300E5", "#F3FF63FF");
  const CoursesPC = useColorModeValue("#6A7300E5", "#F3FF63FF");

  const hbcMusic = useColorModeValue("#FFAB5E4C", "#FFAB5E4C");
  const hcMusic = useColorModeValue("#753800FF","#FFBA7AFF");
  const MusicBC = useColorModeValue("#87582DFF", "#FFB169FF");
  const MusicPC = useColorModeValue("#87582DFF", "#FFB169FF");

  const hbcLife = useColorModeValue("#FF005C4C", "#FF005C4C");
  const hcLife = useColorModeValue("#6E0027FF","#FFABC9FF");
  const LifeBC = useColorModeValue("#9E0039FF", "#FF6EA2FF");
  const LifePC = useColorModeValue("#9E0039FF", "#FF6EA2FF");
  
  const blogObj = props.blogs;

  const graphicsBlogs = props.blogs["graphics"];
  const game_engine_devBlogs = props.blogs["game/engine dev"];
  const lifeBlogs = props.blogs["life"];
  const music_artsBlogs = props.blogs["music and arts"]
  const other_devBlogs = props.blogs["other dev"]
  const coursesBlogs = props.blogs["courses"];


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
          alignItems="stretch"
          minHeight="100vh"
          mx={{sm: "0px", lmd: "0px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}}>

            <BlogsByType
              blogs={graphicsBlogs}
              headingColor={hcGraphics}
              headingBackgroundColor={hbcGraphics}
              buttonColor={graphicsBC}
              progressColor={graphicsPC}
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="start"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Graphics"}
              />
            <BlogsByType
              blogs={game_engine_devBlogs}
              headingColor={hcGED}
              headingBackgroundColor={hbcGED}
              buttonColor={GEDBC}
              progressColor={GEDPC}
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="end"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Game & Engine Dev"}
              />
            <BlogsByType
              blogs={other_devBlogs}            
              headingColor={hcOD}
              headingBackgroundColor={hbcOD}
              buttonColor={ODBC}
              progressColor={ODPC}
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="start"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Other Dev"}
              />            
            <BlogsByType
              blogs={coursesBlogs}                
              headingColor={hcCourses}
              headingBackgroundColor={hbcCourses}
              buttonColor={CoursesBC}
              progressColor={CoursesPC}
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="end"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Courses"}
              />              
            <BlogsByType
              blogs={music_artsBlogs}    
              headingColor={hcMusic}
              headingBackgroundColor={hbcMusic}
              buttonColor={MusicBC}
              progressColor={MusicPC}              
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="start"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Music & Arts"}
              />  
            <BlogsByType
              blogs={lifeBlogs}    
              headingColor={hcLife}
              headingBackgroundColor={hbcLife}
              buttonColor={LifeBC}
              progressColor={LifePC}              
              paragraphColor={paragraphColor}
              linkHoverColor={linkHoverColor}
              alignSelf="end"
              imageBackgroundColor={imageBackgroundColor}
              heading={"Life"}
              /> 
            {/*props.blogs.map((blog : any, index : any) => (
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
            )) */}
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