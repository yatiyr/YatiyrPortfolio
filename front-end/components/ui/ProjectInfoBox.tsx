import { Badge, Box, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


interface ProjectInfoBox {
    linkHoverColor?       : any;
    headingColor?         : any;
    title?                : any;
    paragraphColor?       : any;
    owner?                : any;
    description?          : any;
    url?                  : any;
    language?             : any;
};

const ProjectInfoBox = (props : ProjectInfoBox) => {

    const cardContainerBg = useColorModeValue("white", "gray.900");
    const cardBorder      = useColorModeValue("none", "none");
    const githubIconColor = useColorModeValue("gray.900", "gray.50");

    return (
        <Link href={props.url} passHref>
            <Flex 
                as="a"
                flexDir="column"
                width="100%"
                height="100%"
                justifyContent="start"
                alignItems="center"
                textOverflow="ellipsis"
                backgroundColor={cardContainerBg}
                boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
                _hover={{boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)", transform:"translate(0px, -10px)"}}
                transition="0.3s"
                cursor="pointer"
                border={cardBorder}
                
                >
                <Flex flexDir="column"
                    width="100%"
                    height="100%"
                    padding="4px 16px">
                    <Flex flexDir="row"
                        width="100%"
                        justifyContent="start">
                        <Heading
                                _hover={{color: props.linkHoverColor}}                             
                                color={props.headingColor}
                                transition="background .3s, color .3s"
                                fontSize={{sm: "xl", lmd: "xl", md: "xl", lg: "2xl", xl: "2xl", "2xl": "2xl"}}>
                                    {props.title}
                        </Heading>
                    </Flex>
                    <Box
                        my="10px" 
                        display="block"
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        className="truncated"
                        color={props.paragraphColor}
                        transition="background .3s, color .3s">
                        <Text>{props.description}</Text>
                    </Box>
                    <Flex flexDir="row"
                        width="100%"
                        height="16px"
                        justifyContent="space-between">
                            <Flex>
                                <Badge fontWeight="thin" textTransform="none" colorScheme="blue">{props.owner}</Badge>
                                <Badge fontWeight="thin" textTransform="none" marginLeft="20px" colorScheme="purple">{props.language}</Badge>
                            </Flex>
                            <Icon color={githubIconColor} as={FaGithub}></Icon>
                    </Flex>                     
                </Flex>
            </Flex>
        </Link>
    )
}


export default ProjectInfoBox;