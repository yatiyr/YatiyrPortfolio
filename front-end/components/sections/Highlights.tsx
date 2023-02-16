import { Flex, Heading, SimpleGrid, Box, Divider, Text } from "@chakra-ui/react";
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
                el = <Flex height="100%" width="100%" flexDirection="column">
                
                        <Carousel key={carIndex} gap={0} buttonColor={buttonColor} progressColor={progressColor}>
                            {seriesBlogs[key].map((blog : any, index: any) => {

                                return(
                                    <Flex draggable="false" justifyItems="center" alignItems="center" key={index}>
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
                el = <Flex draggable="false" height="100%" width="100%" flexDirection="column" key={carIndex}>
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
            <Flex paddingY="4" marginLeft="10px" draggable="false" height="100%" width="100%" flexDirection="row" key={carIndex}>
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
        alignItems="stretch"
        flexDirection="column"
        py={{sm: "10px", lmd: "10px", md: "10px", lg: "40px", xl: "40px", "2xl": "40px"}}
        px={{sm: "10px", lmd: "20px", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}
        >         
            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Projects</Heading>
            <Text
             mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
             alignSelf="start"
             textAlign="center" 
             my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
             fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
             color={props.headingColor}>

            </Text>
            <SimpleGrid my="20px" columns={[1, 1, 2, 3]} spacing="40px">
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

            <Divider marginY="75px" marginX="0px" width={"100%"} color={props.linkHoverColor}></Divider> 

            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Highlighted Blogs</Heading>

            <SimpleGrid my="15px" columns={[1, null, 2]} spacing="40px">
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