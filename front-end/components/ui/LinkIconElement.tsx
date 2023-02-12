import { Icon, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

interface LinkIconElementInterface {
    padding?     : any;
    baseColor?   : any;
    hoverColor?  : any;
    activeColor? : any;
    icon?        : any;
    to?          : any;
}

const LinkIconElement = (props : LinkIconElementInterface) => {
 
  return(
      <NextLink href={props.to} passHref>
          <Box
            display="flex"
            alignItems="center"
            padding={props.padding}
            as="div"
            height="100%"
            width="100%"
            maxHeight="8rem">
            <Icon
                cursor="pointer"
                color={props.baseColor}
                _hover={{color: props.hoverColor}}
                _active={{color: props.activeColor}}
                as={props.icon}
                transition="color .3s"
                height="100%"
                width="100%"/>
          </Box>
      </NextLink>
  );
}

export default LinkIconElement;