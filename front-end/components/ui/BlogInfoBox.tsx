import { Badge, Box, Flex, Heading, Image, useColorModeValue, Text } from "@chakra-ui/react";


import NextLink from 'next/link';



const BlogInfoBox = (props : any) => {


    const cardContainerBg = useColorModeValue("white", "gray.900");
    const cardBorder      = useColorModeValue("none", "none");
    

    return (
        <NextLink href={`blog/${props.slug}`} is="div" draggable="false" passHref>
            <Flex
                as="div" 
                flexDir="column"
                width="100%"
                height="466px"
                justifyContent="start"
                alignItems="center"
                textOverflow="ellipsis"
                userSelect="none"
                draggable="false"
                backgroundColor={cardContainerBg}
                boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
                _hover={{boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)", transform:"translate(0px, -10px)"}}
                transition="0.3s"
                cursor="pointer"
                border={cardBorder}        
                my="25px"
                 >
                <Box marginBottom="10px"
                    background={"white"}
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    transition="background .3s">
                    <Image
                    objectFit="cover"
                    height="200px"
                    width="100%"
                    userSelect="none"
                    draggable="false"
                    src={`${process.env.PORTFOLIO_API_URL}/media/${props.imagePath}`}
                    alt="blogInfo"
                    />
                </Box>
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
                                fontSize={{sm: "xl", lmd: "xl", md: "2xl", lg: "2xl", xl: "3xl", "2xl": "3xl"}}>
                                    {props.title}
                        </Heading>
                    </Flex>
                    <Box  
                        display="block"
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        className="truncated"
                        color={props.paragraphColor}
                        transition="background .3s, color .3s">
                        <Text className="truncated">{props.description}</Text>
                    </Box>
                    <Box as="div"
                        my="10px"
                        color={props.paragraphColor}
                        _hover={{color: props.linkHoverColor}}
                        transition="background .3s, color .3s">
                        Read More
                    </Box>
                    <Flex flexDir="row"
                        width="100%"
                        height="16px"
                        justifyContent="start">
                        <Badge fontWeight="thin" fontFamily="Inter" textTransform="none" colorScheme="blue">by {props.owner}</Badge>
                        <Badge fontWeight="thin" textTransform="none" marginLeft="20px" colorScheme="purple">{props.date}</Badge>
                    </Flex>                     
                </Flex>
            </Flex>
        </NextLink>
    )
}


export default BlogInfoBox;