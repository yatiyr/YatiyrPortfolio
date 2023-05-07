import { Badge, Box, Flex, Heading, Icon, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


const ProjectInfoBox = (props : any) => {

    const cardContainerBg = useColorModeValue("purple.50", "purple.900");
    const cardBorder      = useColorModeValue("none", "1px");
    const cardBorderColor = useColorModeValue("gray.900", "gray.800")


    const cardHeadingColor = useColorModeValue("gray.900", "gray.100");
    const cardParagraphColor = useColorModeValue("gray.800", "gray.200");

    return (
        <Link href={props.url} passHref>
            <Flex 
                as="div"
                flexDir="column"
                width="350px"
                height="275px"
                justifyContent="start"
                alignItems="center"
                textOverflow="ellipsis"
                backgroundColor={cardContainerBg}
                boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
                _hover={{boxShadow: "0 12px 24px 0 rgba(0,0,0,0.7)", transform:"translate(0px, -10px)"}}
                transition="0.3s"
                cursor="pointer"
                border={cardBorder}
                borderRadius="20px"
                borderColor={cardBorderColor}>
                <Flex flexDir="column"
                    width="100%"
                    height="100%"
                    padding="4px 16px">
                    <Flex flexDir="row"
                        width="100%"
                        padding="10px 0px"
                        justifyContent="space-between"
                        flexWrap="wrap">
                        <Heading
                                _hover={{color: props.linkHoverColor}}                             
                                color={cardHeadingColor}
                                transition="background .3s, color .3s"
                                fontSize={{sm: "lg", lmd: "lg", md: "lg", lg: "xl", xl: "xl", "2xl": "xl"}}>
                                    {props.title}
                        </Heading>
                        <Heading
                            _hover={{color: props.linkHoverColor}}                             
                            color={cardHeadingColor}
                            transition="background .3s, color .3s"
                            fontSize={{sm: "lg", lmd: "lg", md: "lg", lg: "xl", xl: "xl", "2xl": "xl"}}>
                                {props.years}
                        </Heading>
                    </Flex>
                    <Box marginBottom="10px"
                    background={props.imageBackground}
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    alignSelf="center"
                    justifyContent="center"
                    transition="background .3s">
                        <Image
                        objectFit="cover"     
                        height="100px"
                        width="100%"
                        userSelect="none"
                        src={props.imagePath}
                        alt="blogInfo"
                        />
                    </Box>
                    <Box
                        my="10px" 
                        display="block"
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        className="truncated"
                        color={cardParagraphColor}
                        fontSize={{sm: "xs", lmd: "xs", md: "xs", lg: "xs", xl: "xs", "2xl": "xs"}}
                        transition="background .3s, color .3s">
                        <Text>{props.description}</Text>
                    </Box>
                    <Flex flexDir="row"
                        width="100%"
                        height="64px"
                        padding="10px 0px"
                        justifyContent="space-between">
                            <Flex>
                                <Badge fontWeight="thin" variant="subtle" textTransform="none" colorScheme="blue">{props.owner}</Badge>
                                <Badge fontWeight="thin" variant="subtle" textTransform="none" marginLeft="20px" colorScheme="purple">{props.language}</Badge>
                            </Flex>
                            <Icon color={cardParagraphColor} as={FaGithub}></Icon>
                    </Flex>                     
                </Flex>
            </Flex>
        </Link>
    )
}


export default ProjectInfoBox;