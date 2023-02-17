import { Heading, Link as ChakraLink, 
    useColorModeValue, Text,
    UnorderedList, OrderedList,
    Divider, Box, Flex, Table,
    TableCaption, Thead, Tr, Th, Tfoot, Tbody, Td } from "@chakra-ui/react";
import NextLink from 'next/link';
import { Image } from "@chakra-ui/image";

import Iframe from 'react-iframe';

const CustomLink = (props : any) => {

const linkColor = useColorModeValue("purple.600", "gray.100");

const href = props.href;
const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

if(isInternalLink) {
   return (
        <ChakraLink href={href} color={linkColor} {...props} fontWeight="bold" className="mdx" animation={linkColor === "gray.100" ? "glow 1s ease-in-out infinite alternate" : ""}>
            {props.children}
        </ChakraLink>
   )
}

return (
   <ChakraLink
       target="_blank"
       rel="noopener noreferrer"
       color={linkColor}
       className="mdx"
       animation={linkColor === "gray.100" ? "glow 1s ease-in-out infinite alternate" : ""}            
       fontWeight="bold"
       {...props}
   >
       {props.children}
   </ChakraLink>
)
}

const H1 = (props : any) => {

const headingColor = useColorModeValue("gray.800", "gray.100");    

return <Heading color={headingColor} size="2xl" my="10px" {...props}/>
}

const H2 = (props : any) => {

const headingColor = useColorModeValue("gray.800", "gray.100");    

return <Heading color={headingColor} size="xl" my="10px" {...props}/>
}

const H3 = (props : any) => {

const headingColor = useColorModeValue("gray.800", "gray.100");    

return <Heading fontFamily={'Ubuntu'} color={headingColor} size="lg" my="10px" {...props}/>
}

const H4 = (props : any) => {

const headingColor = useColorModeValue("gray.800", "gray.100");    

return <Heading fontFamily={'Ubuntu'} color={headingColor} size="sm" my="10px" {...props}/>
}

const P = (props : any) => {
const paragraphColor = useColorModeValue("gray.700", "gray.300");  

return <Text text-align="justify" text-justify="inter-word" fontFamily="Ubuntu" color={paragraphColor} {...props}/>
}

const UL = (props : any) => {
const ulColor = useColorModeValue("gray.700", "gray.300");

return <UnorderedList color={ulColor}  {...props}/>
}

const OL = (props : any) => {
const olColor = useColorModeValue("gray.700", "gray.300");

return <OrderedList color={olColor} {...props}/>
}

const HR = (props : any) => {
const hrColor = useColorModeValue("cyan.600", "cyan.400");

return <Divider borderColor={hrColor}/>
}


const MathEq = (props : any) => {
const mathEqColor = useColorModeValue("black", "white");

return <Box fontSize={props.fontSize} color={mathEqColor} {...props}/>
}

const CustomTable = (props : any) => {
const TableColor = useColorModeValue("gray.700", "gray.300");

return <Table color={TableColor} {...props} />
}


const ApiImage = (props : any) => {
const captionColor = useColorModeValue("gray.600", "gray.400");

return (
   <Flex flexDirection="column" alignSelf="center">
       <Image 
              alignSelf="center"
              objectFit="cover" 
              alt={props.alt}
              src={`${process.env.PORTFOLIO_API_URL}/media${props.src}`}
              width={props.width} height={props.height}                   
              flexGrow="1"/>
       <Text flexGrow="1"
             textAlign="center" 
             fontFamily="UbuntuMono"
             fontSize="14px"
             color={captionColor}>
                 {props.caption}
       </Text>
   </Flex>
)
}

const components = {
a: CustomLink,
h1: H1,
h2: H2,
h3: H3,
h4: H4,
p: P,
ul: UL,
ol: OL,
hr: HR,
div: MathEq,
ApiImage,
CustomTable, 
Tbody,
Td,   
Image,
TableCaption,
Thead,
Tr,
Th,
Tfoot,
Iframe   
};

export default components;