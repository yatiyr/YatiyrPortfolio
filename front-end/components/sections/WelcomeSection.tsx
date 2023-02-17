import { Badge, Flex, Heading, Image, Text, useColorModeValue, Box, Icon } from '@chakra-ui/react';
import { MetuIcon, CengIcon } from 'styles/icons/customIcons';
// import Typed from 'react-typed';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa';
import NextLink from 'next/link';


interface SocialIconInterface
{
    to? : any;
    padding? : any;
    baseColor? : any;
    hoverColor? : any;
    activeColor? : any;
    icon? : any;
}

const SocialIcon = (props : SocialIconInterface) => {
    return (
        <NextLink href={props.to} passHref>
            <Box 
            padding={props.padding}
            as="div">
            <Icon
                w="50px"
                h="50px"
                cursor="pointer"
                color={props.baseColor}
                _hover={{color: props.hoverColor}}
                _active={{color: props.activeColor}}
                as={props.icon}
                transition="color .3s"/>
            </Box>
        </NextLink>
    );
}


interface WelcomeSectionInterface {

}

const WelcomeSection = (props : WelcomeSectionInterface) => {

    const headingColor = useColorModeValue("gray.700","gray.200");
    const paragraphColor = useColorModeValue("gray.600", "gray.400");

    const iconBaseColor = useColorModeValue("gray.500", "gray.200");
    const iconHoverColor = useColorModeValue("gray.700", "gray.100");

    const sectionBorderColor = useColorModeValue("black", "purple.200");


    const steamIconColor = useColorModeValue("gray.700", "gray.300");
    const steamIconHoverColor = useColorModeValue("black", "gray.50");

    const linkedinIconColor = useColorModeValue("blue.500", "blue.300");
    const linkedinIconHoverColor = useColorModeValue("blue.700", "blue.100");

    return(
        <Flex
            flexDirection={{sm: "column", lmd: "column", md: "row", lg: "row", xl: "row", "2xl": "row"}}
            minHeight={{sm: "1000px", lmd: "750px", md: "600px", lg: "700px", xl: "700px", "2xl": "700px"}}
            zIndex="1"
            justifyContent={{sm: "start", lmd: "start", md: "start", lg: "center", xl: "center", "2xl": "center"}}
            alignItems={{sm: "center", lmd: "center", md: "start", lg: "center", xl: "center", "2xl": "center"}}            
            borderBottom="1px"
            borderBottomColor={sectionBorderColor}
            my={{sm: "10px", lmd: "40px", md: "40px", lg: "40px", xl: "40px", "2xl": "40px"}}
            mx={{sm: "0", lmd: "0", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}>
                <Image 
                    boxSize="400px"
                    objectFit="cover"
                    src="/images/erenAvatar.jpg"
                    alt="eren"
                    boxShadow="0 4px 15px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.3)"/>
                <Flex
                    flexDirection="column"
                    margin="10px 50px 0px 50px"
                    height={{sm: "220px", lmd: "220px", md: "350px", lg: "350px", xl: "350px", "2xl": "350px"}}
                    justifyContent="space-between">
                        <Heading 
                            my="5px"
                            textAlign="center"
                            color={headingColor}
                            fontFamily="Ubuntu"
                            fontSize = {{sm: "4xl", lmd: "5xl", md: "4xl", lg: "4xl", xl: "5xl", "2xl": "5xl"}}                            
                            transition="background .3s, color .3s">
                                <TypeAnimation
                                    sequence={[
                                        "About",
                                        1500,
                                        " Me",
                                        1000
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}                                
                                />                                                                

                            </Heading>
                        <Text 
                            color={paragraphColor}
                            my="0px"
                            fontSize = {{sm: "xl", lmd: "xl", md: "md", lg: "lg", xl: "xl", "2xl": "xl"}}
                            transition="background .3s, color .3s">
                            I&apos;m Eren. I am currently a PhD student and a teaching assistant in Middle East Technical University,
                            Computer Engineering Department, Ankara, Turkey. I love graphics programming and I&apos;m trying to
                            learn everthing what is necessary to become a good graphics programmer. Here, I will post my fun projects
                            and also keep track of the things I&apos;m trying to learn. 
                        </Text>
                    <Flex
                        marginTop="20px"
                        justifyContent="space-around" 
                        flexDirection="row"
                        maxHeight="50px">
                        <SocialIcon padding="0 0 0 0"to="https://steamcommunity.com/id/yatiyr" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconHoverColor} icon={FaSteam}/>
                        <SocialIcon padding="0 0 0 0"to="https://www.linkedin.com/in/eren-dere/" baseColor={linkedinIconColor} hoverColor={linkedinIconHoverColor} activeColor={linkedinIconHoverColor} icon={FaLinkedin}/>                                                                                
                        <SocialIcon padding="0 0 0 0"to="https://github.com/yatiyr/" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconHoverColor} icon={FaGithub}/>                                                        
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default WelcomeSection;