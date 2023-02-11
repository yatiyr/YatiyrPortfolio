import { Flex, Heading, useColorModeValue, Text } from "@chakra-ui/react";


interface EducationWorkInfoBoxInterface {
    icon? : any;
    headingColor? : any;
    paragraphColor? : any;
    yearsBetween? : any;
    details? : any;
    cgpa? : any;
    location? : any;
    title? : any;
}

const EducationWorkInfoBox = (props : EducationWorkInfoBoxInterface) => {

    const cardContainerBg = useColorModeValue("white", "gray.900");
    const cardBorder      = useColorModeValue("none", "none");

    return (
        <Flex 
            flexDir="row"
            width="100%"
            height="105px"
            justifyContent="start"
            alignItems="stretch"
            textOverflow="ellipsis"
            backgroundColor={cardContainerBg}
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            _hover={{boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)", transform:"translate(0px, -10px)"}}
            transition="0.3s"
            cursor="pointer"
            border={cardBorder}
            my="20px"

            >
                <Flex overflow="visible" width="125px" justifyItems="center" alignItems="center" padding="4px 16px">
                    {props.icon}
                </Flex>
                <Flex flexDirection="column" padding="8px 16px" width="100%">
                    <Flex flexDirection="row" justifyContent="space-between" width="100%">
                        <Heading color={props.headingColor} fontSize={{sm: "l", lmd: "xl", md: "xl", lg: "2xl", xl: "2xl", "2xl": "2xl"}}>{props.title}</Heading>
                        <Text color={props.paragraphColor} fontSize="sm">{props.yearsBetween}</Text>
                    </Flex>
                    <Text color={props.paragraphColor} fontSize="12px" my="10px">{props.details}</Text>
                    <Flex flexDirection="row" justifyContent="space-between">
                        <Text color={props.paragraphColor} fontSize="10px">{props.location}</Text>
                        <Text color={props.paragraphColor} fontSize="10px" justifySelf="end" alignSelf="end">{props.cgpa}</Text>
                    </Flex>

                </Flex>
        </Flex>
    )
}


export default EducationWorkInfoBox;