import { Badge, Divider, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import IconElement from 'components/ui/IconElement';
import { MetuIcon, CengIcon } from 'styles/icons/customIcons';
//import Typed from 'react-typed';
import { TypeAnimation } from 'react-type-animation';
import BlogInfoBox from 'components/ui/BlogInfoBox';
import Highlights from './Highlights';


interface WelcomeSectionInterface {

}

const WelcomeSection = (props : WelcomeSectionInterface) => {

    const headingColor = useColorModeValue("gray.700","gray.200");
    const paragraphColor = useColorModeValue("gray.600", "gray.400");

    const iconBaseColor = useColorModeValue("red.500", "red.600");
    const iconHoverColor = useColorModeValue("red.500", "red.600");

    const sectionBorderColor = useColorModeValue("black", "purple.200");

    return(
        <Flex
            flexDirection={{sm: "column", lmd: "column", md: "row", lg: "row", xl: "row", "2xl": "row"}}
            minHeight={{sm: "250px", lmd: "280px", md: "400px", lg: "400px", xl: "400px", "2xl": "400px"}}
            zIndex="1"
            justifyContent={{sm: "start", lmd: "start", md: "start", lg: "center", xl: "center", "2xl": "center"}}
            alignItems={{sm: "center", lmd: "center", md: "start", lg: "center", xl: "center", "2xl": "center"}}            
            my={{sm: "10px", lmd: "20px", md: "20px", lg: "20px", xl: "20px", "2xl": "10px"}}
            mx={{sm: "0", lmd: "0", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}>
                <Flex
                    flexDirection="column"
                    margin="10px 50px 0px 50px"
                    height={{sm: "220px", lmd: "220px", md: "320px", lg: "320px", xl: "320px", "2xl": "320px"}}
                    justifyContent="space-between">
                        <Heading 
                            my="5px"
                            textAlign="center"
                            color={headingColor}
                            fontFamily="Ubuntu"
                            fontSize = {{sm: "4xl", lmd: "5xl", md: "5xl", lg: "5xl", xl: "5xl", "2xl": "5xl"}}                            
                            transition="background .3s, color .3s">
                                <TypeAnimation
                                    sequence={[
                                        "Welcome",
                                        1000,
                                        " to my page!"
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}                                
                                />                     
                            </Heading>
                        <Text 
                            color={paragraphColor}
                            my="0px"
                            fontSize = {{sm: "xl", lmd: "xl", md: "4xl", lg: "4xl", xl: "4xl", "2xl": "4xl"}}
                            transition="background .3s, color .3s">
                            Welcome. This site is being built with NextJS and ChakraUI. Blogs and projects are
                            shown here. For more info, About and Blog pages can be visited.
                        </Text>
                </Flex>
        </Flex>
    )
}

interface IndexMainInterface {
    highlightedBlogs? : any;
}

const IndexMain = (props : IndexMainInterface) => {

    
    const headingColor = useColorModeValue("gray.700","gray.200");
    const paragraphColor = useColorModeValue("gray.600", "gray.400");
    const linkHoverColor = useColorModeValue("purple.600", "purple.400");
    const imageBackgroundColor = useColorModeValue("gray.300", "gray.700")


    return(
        <>
            <WelcomeSection/>
            <Divider marginY="75px" color={linkHoverColor}></Divider>
            <Highlights
                headingColor={headingColor}
                paragraphColor={paragraphColor}
                linkHoverColor={linkHoverColor}
                imageBackgroundColor={imageBackgroundColor}
                highlightedBlogs={props.highlightedBlogs}/>    
        </>
    )

}



export default IndexMain;