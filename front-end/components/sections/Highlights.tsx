import { Flex, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import BlogInfoBox from "components/ui/BlogInfoBox";
import ProjectInfoBox from "components/ui/ProjectInfoBox";
import {projects} from "data/projects";
import dateFormat from "dateformat";


interface HighlightsInterface {
    headingColor?         : any;
    paragraphColor?       : any;
    linkHoverColor?       : any;
    highlightedBlogs?     : any;
    imageBackgroundColor? : any;
}

const Highlights = (props : HighlightsInterface) => {

    return(
        <Flex
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        my={{sm: "10px", lmd: "10px", md: "10px", lg: "40px", xl: "40px", "2xl": "40px"}}
        mx={{sm: "10px", lmd: "20px", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}
        >
            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Projects</Heading>
            <SimpleGrid my="20px" columns={[1, null, 2]} spacing="40px">
                {projects.map((project : any, index : any) => (
                    <ProjectInfoBox
                        key={index}
                        owner={project.owner}
                        title={project.title}
                        url={project.url}
                        description={project.description}
                        language={project.language}
                        headingColor={props.headingColor}
                        paragraphColor={props.paragraphColor}
                        linkHoverColor={props.linkHoverColor}                        />                        
                ))}
            </SimpleGrid>

            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Highlighted Blogs</Heading>

            <Flex
                    justifyContent="start"
                    alignItems="center"
                    flexDirection="column"
                    mx={{sm: "0px", lmd: "10px", md: "20px", lg: "30px", xl: "100px", "2xl": "150px"}}
                    >
                 {props.highlightedBlogs.map((blog : any, index : any) => (
                            <BlogInfoBox
                                key={index}
                                imagePath={blog.headImageUrl}
                                title={blog.title}
                                date={dateFormat(blog.publishedAt, "dddd, mmm dS, yyyy")}
                                description={blog.summary}
                                owner="erendere"
                                slug={blog.slug}
                                headingColor={props.headingColor}
                                paragraphColor={props.paragraphColor}
                                linkHoverColor={props.linkHoverColor}
                                imageBackgroundColor={props.imageBackgroundColor}/>
                ))}
            </Flex>          
        </Flex>
    )

}

export default Highlights;