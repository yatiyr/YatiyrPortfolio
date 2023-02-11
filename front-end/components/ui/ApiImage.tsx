import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Image, Text } from "@chakra-ui/react";

const ApiImage = (props : any) => {
    const captionColor = useColorModeValue("gray.600", "gray.400");

    return (
        <Flex alignSelf="center" flexDirection="column" width={props.width} height={props.height}>
            <Image objectFit="cover" 
                   alt={props.alt}
                   src={`${process.env.PORTFOLIO_API_URL}/media${props.src}`}
                   flexGrow="2"/>
            <Text flexGrow="1"
                  textAlign="center" 
                  fontFamily="UbuntuMono"
                  fontSize="6px"
                  color={captionColor}>
                      {props.caption}
            </Text>
        </Flex>
    )
}

export default ApiImage;