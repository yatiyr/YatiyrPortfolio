import { Heading, useColorModeValue, Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import Carousel from "@/components/thirdParty/Carousel";
import BlogInfoBox from "../ui/BlogInfoBox";
import dateFormat from "dateformat";

const ReturnSeriesBlogs = (seriesBlogs: any, 
                           headingColor: any,
                           paragraphColor: any,
                           linkHoverColor: any,
                           imageBackgroundColor: any) =>
{
    seriesBlogs.map((blog : any, index: any) => (
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
    ))
}

const DistributeSeriesBlogs = (seriesBlogsJson: any, 
                               headingColor: any,
                               paragraphColor: any,
                               linkHoverColor: any,
                               imageBackgroundColor: any,
                               buttonColor : any,
                               progressColor : any) =>
{
    const keys = Object.keys(seriesBlogsJson);

    const resArray = new Array();

    let carIndex = 0;


    let processedBlogs : any = {};
    for(let key of keys)
    {
        processedBlogs[key] = new Array();
        for(let obj of seriesBlogsJson[key])
        {
            let parsed = JSON.parse(obj);
            processedBlogs[key].push(parsed);
        }

        // Sort according to slugs
        processedBlogs[key] = processedBlogs[key].sort((a : any, b : any) => {
            
            const lastIndexB = b.slug.lastIndexOf('-') + 1;
            const slugNoB = parseInt(b.slug.slice(lastIndexB));

            const lastIndexA = a.slug.lastIndexOf('-') + 1;
            const slugNoA = parseInt(a.slug.slice(lastIndexA));

            return slugNoA - slugNoB;    
        })
    }


    for(let key of keys)
    {
        if(key !== "no_series")
        {
            let el : any;

            if (processedBlogs[key].length >  1)
            {
                el = <Flex height="100%" width="100%" flexDirection="column">
                
                        <Carousel key={carIndex} gap={16} buttonColor={buttonColor} progressColor={progressColor}>
                            {processedBlogs[key].map((blog : any, index: any) => {

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
            else if (processedBlogs[key].length === 1)
            {
                el = <Flex draggable="false" height="100%" width="100%" flexDirection="column" key={carIndex}>
                        <BlogInfoBox
                            imagePath={processedBlogs[key][0].headImageUrl}
                            title={processedBlogs[key][0].title}
                            date={dateFormat(processedBlogs[key][0].publishedAt, "dddd, mmm dS, yyyy")}
                            description={processedBlogs[key][0].summary}
                            owner="erendere"
                            slug={processedBlogs[key][0].slug}
                            headingColor={headingColor}
                            paragraphColor={paragraphColor}
                            linkHoverColor={linkHoverColor}
                            imageBackgroundColor={imageBackgroundColor}/>
                     </Flex>
            }
            carIndex++;
            resArray.push(el);
        }
           
    }


    let el : any;

    el = processedBlogs["no_series"].map((blog: any, index: any) => 
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

const BlogsByType = (props: any) => 
{

    const numberOfSeries = Object.keys(props.blogs).length - 1;

    const numberOfNoSeries = props.blogs["no_series"].length;


    return (
            <Flex
              justifyContent="flex-start"
              flexDirection="column"
              padding="50px 20px">
                <Flex 
                    padding="12px"
                    rounded={"5px"}
                    alignSelf={props.alignSelf}
                    backgroundColor={props.headingBackgroundColor}
                    justifyContent={props.alignSelf}>
                    <Heading 
                        color={props.headingColor}>
                        {props.heading}
                    </Heading>
                </Flex>             

                <SimpleGrid my="15px" columns={[1, null, 2]} spacing="40px">
                { 

                    <>
                    {DistributeSeriesBlogs(props.blogs, props.headingColor, props.paragraphColor,
                                           props.linkHoverColor, props.imageBackgroundColor,
                                           props.buttonColor, props.progressColor)}

                  </>
                }
                </SimpleGrid>        
            </Flex>

    )

}


export default BlogsByType;