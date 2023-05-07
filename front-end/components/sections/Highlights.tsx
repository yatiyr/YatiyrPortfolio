import { Flex, Heading, SimpleGrid, Box, Divider, Text, useColorModeValue } from "@chakra-ui/react";
import BlogInfoBox from "components/ui/BlogInfoBox";
import ProjectInfoBox from "components/ui/ProjectInfoBox";
import {projects} from "data/projects";
import dateFormat from "dateformat";

import Carousel from "@/components/thirdParty/Carousel";

const DistributeSeriesBlogs = (seriesBlogs: any, 
                               headingColor: any,
                               paragraphColor: any,
                               linkHoverColor: any,
                               imageBackgroundColor: any,
                               buttonColor : any,
                               progressColor : any) =>
{


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
    
    const keys = Object.keys(seriesBlogs);

    const resArray = new Array();
    let carIndex = 0;

    for(let key of keys)
    {
        if(key !== "no_series")
        {
            let el : any;

            if (seriesBlogs[key].length >  1)
            {
                el = <Flex margin="0px" padding="0px" height="100%" width="100%" flexDirection="column">
                
                        <Carousel key={carIndex} gap={6} buttonColor={buttonColor} progressColor={progressColor}>
                            {seriesBlogs[key].map((blog : any, index: any) => {
                                return(
                                    <Flex marginLeft="0px" padding="0px" draggable="false" justifyItems="center" alignItems="start" key={index}>
                                        <BlogInfoBox
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
                                    </Flex>
                                )
                            })}
                        </Carousel>
                    </Flex>
            }
            else if (seriesBlogs[key].length === 1)
            {
                el = <Flex paddingY="0" marginLeft="0px" draggable="false" height="100%" width="100%" flexDirection="column" key={carIndex}>
                        <BlogInfoBox
                            imagePath={seriesBlogs[key][0].headImageUrl}
                            title={seriesBlogs[key][0].title}
                            date={dateFormat(seriesBlogs[key][0].publishedAt, "dddd, mmm dS, yyyy")}
                            description={seriesBlogs[key][0].summary}
                            owner="erendere"
                            slug={seriesBlogs[key][0].slug}
                            headingColor={headingColor}
                            paragraphColor={paragraphColor}
                            linkHoverColor={linkHoverColor}
                            imageBackgroundColor={imageBackgroundColor}/>
                     </Flex>
            }
            resArray.push(el);
        }
        carIndex++;
    }


    let el : any;

    el = seriesBlogs["no_series"].map((blog: any, index: any) => 
    {
        return(
            <Flex paddingY="4" marginLeft="10px" draggable="false" height="100%" width="100%" flexDirection="column" key={carIndex}>
                <BlogInfoBox
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
            </Flex>                    
        )
    })

    carIndex++;
    resArray.push(el);
    
    if(resArray[0].length === 0)
    {
        return <Text marginY="25px">There are no blogs here yet.</Text>
    }

    return resArray;
}


const Highlights = (props : any) => {

    return(
        <Flex
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        py={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
        px={{sm: "10px", lmd: "10px", md: "10px", lg: "35px", xl: "50px", "2xl": "100px"}}
        >         
            <Heading
                mx={{sm: "50px", lmd: "50px", md: "60px", lg: "80px", xl: "100px", "2xl": "130px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "xl", lmd: "xl", md: "xl", lg: "xl", xl: "xl", "2xl": "xl"}}
                color={props.headingColor}>Projects</Heading>
            <Text
             mx={{sm: "50px", lmd: "50px", md: "60px", lg: "80px", xl: "100px", "2xl": "130px"}} 
             alignSelf="start"
             textAlign="justify" 
             my={{sm: "25px", lmd: "25px", md: "25px", lg: "25px", xl: "25px", "2xl": "25px"}}
             fontSize={{sm: "sm", lmd: "md", md: "md", lg: "lg", xl: "lg", "2xl": "lg"}}
             color={props.headingColor}>
            These are my open source projects. Clicking on one of these cards will redirect you to the github page of the project.
            </Text>
            <SimpleGrid my="10px" columns={{sm: 1, lmd: 1, md: 2, lg: 2, xl: 2, "2xl": 3}} spacing="40px">
                {projects.map((project : any, index : any) => (
                    <ProjectInfoBox
                        key={index}
                        owner={project.owner}
                        title={project.title}
                        url={project.url}
                        imagePath={project.imagePath}
                        years={project.years}
                        description={project.description}
                        language={project.language}
                        headingColor={props.headingColor}
                        paragraphColor={props.paragraphColor}
                        linkHoverColor={props.linkHoverColor}/>                        
                ))}
            </SimpleGrid>

            <Divider marginY="35px" marginX="0px" width={"100%"} color={props.linkHoverColor}></Divider> 

            <Heading
                mx={{sm: "50px", lmd: "50px", md: "60px", lg: "80px", xl: "100px", "2xl": "130px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "xl", lmd: "xl", md: "xl", lg: "xl", xl: "xl", "2xl": "xl"}}
                color={props.headingColor}>Highlighted Blogs</Heading>
            <Text
             mx={{sm: "50px", lmd: "50px", md: "60px", lg: "80px", xl: "100px", "2xl": "130px"}} 
             alignSelf="start"
             textAlign="justify" 
             my={{sm: "25px", lmd: "25px", md: "25px", lg: "25px", xl: "25px", "2xl": "25px"}}
             fontSize={{sm: "sm", lmd: "md", md: "md", lg: "lg", xl: "lg", "2xl": "lg"}}
             color={props.headingColor}>
            In this section, highlighted blogs are shown. You can check out Blogs section to see all of the blogs. Blogs that are a part of a series are shown as carousels.
            </Text>
            <SimpleGrid my="10px" columns={{sm: 1, lmd: 1, md: 1, lg: 1, xl: 1, "2xl": 1}} spacing="30px">
            {
                <>
                {DistributeSeriesBlogs(props.highlightedBlogs, props.headingColor, props.paragraphColor,
                                    props.linkHoverColor, props.imageBackgroundColor,
                                    props.buttonColor, props.progressColor)}

                </>
            }
            </SimpleGrid>         
        </Flex>
    )

}

export default Highlights;