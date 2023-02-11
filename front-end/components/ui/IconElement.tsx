import { Icon, Box } from '@chakra-ui/react';

interface IconElementInterface {
    position?       : any;
    margin?         : any;
    display?        : any;
    height?         : any;
    width?          : any;
    opacity?        : any;
    visibility?     : any;
    onClickHandler? : any;
    baseColor?      : any;
    hoverColor?     : any;
    activeColor?    : any;
    icon?           : any;
    padding?        : any;
};

const IconElement = (props : IconElementInterface) => {
 
  return(
    <Box 
      position={props.position}
      margin={props.margin}
      display={props.display}
      justifyContent="center"
      transition="background .3s, opacity .5s"
      height={props.height ? props.height : "100%"}
      width={props.width ? props.width : "100%"}
      padding="0px 0px"
      zIndex="10"
      opacity={props.opacity ? props.opacity : "1"}
      visibility={props.visibility ? props.visibility : "visible"}>
      <Icon
          padding="1rem 1rem"
          height="90%"
          width="90%"
          alignSelf="center"
          justifySelf="center"
          onClick={props.onClickHandler}
          cursor="pointer"
          color={props.baseColor}
          _hover={{color: props.hoverColor}}
          _active={{color: props.activeColor}}
          as={props.icon}
          opacity={props.opacity ? props.opacity : "1"}          
          transition="color .3s, opacity .5s"/>
    </Box>
  );
}

export default IconElement;