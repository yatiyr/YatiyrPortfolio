import { Box, useColorModeValue } from "@chakra-ui/react";

interface FooterProps {

}

const Footer = (props : FooterProps) => {

    const footerTextColor = useColorModeValue("gray.500", "gray.500");

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100px"
            width="100%"
            background="none"
            justifyContent="center">
                <Box
                    fontFamily="UbuntuMono" 
                    textAlign="center"
                    color={footerTextColor}>
                    Copyright &copy; {new Date().getFullYear()} --- Eren Dere
                </Box>
        </Box>
    )
}


export default Footer;