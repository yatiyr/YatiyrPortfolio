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
            minHeight={{sm: "50px", lmd: "80px", md: "100px", lg: "100px", xl: "100px", "2xl": "100px"}}
            zIndex="1"
            justifyContent={{sm: "start", lmd: "start", md: "start", lg: "center", xl: "center", "2xl": "center"}}
            alignItems={{sm: "center", lmd: "center", md: "start", lg: "center", xl: "center", "2xl": "center"}}            
            my={{sm: "20px", lmd: "20px", md: "20px", lg: "20px", xl: "20px", "2xl": "20px"}}
            mx={{sm: "0", lmd: "0", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}>
                <Flex
                    flexDirection="column"
                    margin="10px 60px 0px 60px"
                    height={{sm: "180px", lmd: "180px", md: "180px", lg: "180px", xl: "180px", "2xl": "180px"}}
                    justifyContent="space-between">
                        <Heading 
                            my="10px"
                            textAlign="center"
                            color={headingColor}
                            fontFamily="Ubuntu"
                            fontSize = {{sm: "2xl", lmd: "3xl", md: "3xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}} 
                            transition="background .3s, color .3s">
                                <TypeAnimation
                                    sequence={[
                                        "Welcome",
                                        1000,
                                        "Hoş Geldiniz",
                                        1500,
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}                                
                                />                     
                            </Heading>
                        <Text 
                            color={paragraphColor}
                            mx= {{sm: "10px", lmd: "15px", md: "25px", lg: "25px", xl: "50px", "2xl": "75px"}} 
                            my="0px"
                            fontSize = {{sm: "md", lmd: "md", md: "md", lg: "lg", xl: "lg", "2xl": "lg"}}
                            transition="background .3s, color .3s">
                            Welcome. I am Eren. This site is being built with NextJS and ChakraUI. Blogs and projects are
                            shown here. For more info about me and what I do, About and Blog pages can be visited.
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
            <Divider marginY="20px" color={linkHoverColor}></Divider>
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