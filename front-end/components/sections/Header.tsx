import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa';
import LinkIconElement from 'components/ui/LinkIconElement';
import DarkModeSwitch from 'components/ui/DarkModeSwitch';
import IconElement from 'components/ui/IconElement';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useColorModeValue, 
         Button,
         Menu,
         MenuButton,
         MenuList,
         MenuItem,
         Box } from "@chakra-ui/react";



interface HeaderLinkInterface {
    height?                : any;
    width?                 : any;
    fontSize?              : any;
    baseColor?             : any;
    backgroundColor?       : any;
    hoverBackgroundColor?  : any;
    hoverColor?            : any;
    activeBackgroundColor? : any;
    activeColor?           : any;
    text?                  : any;
    to?                    : any;
};

const HeaderLink = (props : HeaderLinkInterface) => {
  return(
      <Button
        height={props.height}
        width={props.width}
        fontSize={props.fontSize}
        aria-label="Header Link"
        variant="ghost"
        as="div"
        color={props.baseColor}
        bg={props.backgroundColor}
        _focus={{boxShadow: "none"}}
        _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        rounded={0}
        minHeight="40px"
        transition="background .3s, color .3s"
      >
        <NextLink href={props.to} passHref>
          {props.text}
        </NextLink>
      </Button>     
    
  )
}

interface HeaderLogoInterface {
    margin?                : any;
    baseColor?             : any;
    backgroundColor?       : any;
    hoverBackgroundColor?  : any;
    hoverColor?            : any;
    activeBackgroundColor? : any;
    activeColor?           : any;
    display?               : any;
    text?                  : any;
};

const HeaderLogo = (props : HeaderLogoInterface) => {
  return (
      <Button
        fontSize="2xl"
        height="100%"
        width="100%"
        aria-label="Header Logo"
        variant="ghost"
        as="div"
        margin={props.margin}
        color={props.baseColor}
        bg={props.backgroundColor}
        _focus={{boxShadow: "none"}}
        _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        rounded={0}
        minHeight="40px"        
        transition="background .3s, color .3s"
        display={props.display}
      >
        <NextLink href="/" passHref>
          {props.text}
        </NextLink>
      </Button>
    
  )
}

interface AdminMenuInterface {
    margin?                : any;
    baseColor?             : any;
    backgroundColor?       : any;
    hoverBackgroundColor?  : any;
    hoverColor?            : any;
    activeBackgroundColor? : any;
    activeColor?           : any;
    display?               : any;
    menuToggled?           : any;
};


interface HeaderMenuIconInterface {
    margin?                : any;
    baseColor?             : any;
    backgroundColor?       : any;
    hoverBackgroundColor?  : any;
    hoverColor?            : any;
    menuToggled?           : any;
    activeColor?           : any;
    display?               : any;
    onClickHandler?        : any;
    padding?               : any;
}

const HeaderMenuIcon = (props : HeaderMenuIconInterface) => {
  return (
    <IconElement
      onClickHandler={props.onClickHandler}
      padding={props.padding}      
      baseColor={props.baseColor}
      hoverColor={props.hoverColor}
      activeColor={props.activeColor}
      icon={props.menuToggled ? VscChromeClose : GiHamburgerMenu}/>
  )
}


interface HeaderInterface {
    loading? : any;
    user?    : any;
};

const Header = (props : HeaderInterface) => {

  const [menuToggled, setMenuToggled] = useState(false);

  const headerBorderColor = useColorModeValue("gray.100"," gray.300");

  const color           = useColorModeValue("black", "white");
  const activeColor     = useColorModeValue("gray.100", "gray.800");
  const backgroundColor = useColorModeValue("white", "gray.900");

  const logoBaseColor   = useColorModeValue("purple.600", "purple.300");
  const logoHoverColor  = useColorModeValue("purple.700", "purple.200");
  const logoActiveColor = useColorModeValue("purple.800", "purple.100");

  const iconBaseColor   = useColorModeValue("gray.900","gray.50");
  const iconHoverColor  = useColorModeValue("black", "white");
  const iconActiveColor = useColorModeValue("black", "white");

  const headerLinkBaseColor = useColorModeValue("gray.600", "gray.400");
  const headerLinkHoverColor = useColorModeValue("gray.800", "gray.100");
  const headerLinkActiveColor = useColorModeValue("gray.900", "gray.100");

  const menuItemHoverColor = useColorModeValue("gray.200", "gray.700");

  const steamIconColor = useColorModeValue("gray.700", "gray.300");
  const steamIconHoverColor = useColorModeValue("black", "gray.50");

  const linkedinIconColor = useColorModeValue("blue.500", "blue.300");
  const linkedinIconHoverColor = useColorModeValue("blue.700", "blue.100");

  const [showHeader, setShowHeader] = useState(true);
  const controllHeader = () => {

    if(window.scrollY > 200) {
      setShowHeader(false);
    }
    else {
      setShowHeader(true);
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', controllHeader);
    return () => {
      window.removeEventListener('scroll', controllHeader);
    }
  }, [])

  return (
    <>     
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="stretch"
      minWidth="356px"
      width="auto"
      minHeight="60px"
      top="0"
      fontFamily="Inter"
      zIndex="100"
      backgroundColor={backgroundColor}
      transition="background .3s"
      marginBottom="20px"                
    >
      {/* Desktop Part */}

      <Box display="flex" flexDirection="row">
        <DarkModeSwitch 
          height="4rem"
          display={{sm: "none", slmd: "flex", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}
          margin="0 0 0 20px" 
          baseColor={iconBaseColor} 
          hoverColor={iconHoverColor} 
          activeColor={iconActiveColor} />                    
        <HeaderLogo 
          text="YATIYR" 
          baseColor={logoBaseColor}
          hoverColor={logoHoverColor}
          activeColor={logoActiveColor}
          backgroundColor={backgroundColor}
          activeBackgroundColor={backgroundColor}
          display={{sm: "none", lmd: "none", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}/>
      </Box>

      <Flex
        display={{sm: "none", slmd: "flex", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        flexShrink="1"
        flexGrow="1"
        backgroundColor={backgroundColor}
        transition="background .3s, color .3s"
        mx="20px">
        <HeaderLink fontSize={{sm: "xl", lmd: "xl", md: "2xl", lg: "2xl", xl: "2xl", "2xl": "2xl"}} to="/" text="Home" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>          
        <HeaderLink fontSize={{sm: "xl", lmd: "xl", md: "2xl", lg: "2xl", xl: "2xl", "2xl": "2xl"}} to="/about" text="About" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
        <HeaderLink fontSize={{sm: "xl", lmd: "xl", md: "2xl", lg: "2xl", xl: "2xl", "2xl": "2xl"}} to="/blog" text="Blog" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
      </Flex>


      <Flex
        display={{sm: "none", slmd: "flex", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minWidth="9rem"
        backgroundColor={backgroundColor}
        transition="background .3s, color .3s"        
      >
        <LinkIconElement padding="1rem 1rem 1rem 1rem"to="https://steamcommunity.com/id/yatiyr" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconColor} icon={FaSteam}/>        
        <LinkIconElement padding="1rem 1rem 1rem 1rem"to="https://www.linkedin.com/in/eren-dere/" baseColor={linkedinIconColor} hoverColor={linkedinIconHoverColor} activeColor={linkedinIconColor} icon={FaLinkedin}/>                
        <LinkIconElement padding="1rem 1rem 1rem 1rem"to="https://github.com/yatiyr/" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconColor} icon={FaGithub}/>
      </Flex>
      {/* Desktop Part END! */}

      {/* Mobile Part */}
      <Flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="start"
        display={{sm: "flex", slmd: "none", lmd: "none", md: "none", lg: "none", xl: "none", "2xl": "none"}}
        height={menuToggled ? "90vh" : "60px"}        
        backgroundColor={backgroundColor}
        transition="height 0.5s, background .3s, color .3s">
        <Flex 
          flexDirection="row"
          flexGrow="1"
          flexShrink="1"
          justifyContent="space-between">

          <Box display="flex" flexDirection="row">
            <DarkModeSwitch 
              display="flex"
              margin="0 0 0 20px" 
              baseColor={iconBaseColor} 
              hoverColor={iconHoverColor} 
              activeColor={iconActiveColor}/>             
            <HeaderLogo 
              text="YATIYR"
              margin="0 0 0 20px"               
              baseColor={logoBaseColor}
              hoverColor={logoHoverColor}
              activeColor={logoActiveColor}
              backgroundColor={backgroundColor}
              activeBackgroundColor={backgroundColor}/> 
          </Box>


          <Flex
            flexDirection="row"
            height="100%"
            alignItems="center"
            mx="10px">
            <HeaderMenuIcon
              padding="0 20px 0 0"            
              onClickHandler={() => {setMenuToggled(!menuToggled);}}
              menuToggled={menuToggled}
              baseColor={headerLinkBaseColor}
              hoverColor={headerLinkHoverColor}
              activeColor={headerLinkActiveColor}/>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="space-around"
          overflow="hidden"
          height="100%"
          >
            <HeaderLink fontSize="3xl" width="100%" height="100%" to="/" text="Home" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>            
            <HeaderLink fontSize="3xl" width="100%" height="100%" to="/about" text="About" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink fontSize="3xl" width="100%" height="100%" to="/blog" text="Blog" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>           
            <Flex
              flexDirection="row"
              justifyContent="center"
              height="50%"
              >
              <LinkIconElement padding="2.5rem 2.5rem 2.5rem 2.5rem"to="https://steamcommunity.com/id/yatiyr" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconColor} icon={FaSteam}/>        
              <LinkIconElement padding="2.5rem 2.5rem 2.5rem 2.5rem"to="https://www.linkedin.com/in/eren-dere/" baseColor={linkedinIconColor} hoverColor={linkedinIconHoverColor} activeColor={linkedinIconColor} icon={FaLinkedin}/>                
              <LinkIconElement padding="2.5rem 2.5rem 2.5rem 2.5rem"to="https://github.com/yatiyr/" baseColor={steamIconColor} hoverColor={steamIconHoverColor} activeColor={steamIconColor} icon={FaGithub}/>
            </Flex>            
        </Flex>     

      </Flex>

    </Flex>
    </>
  )
}


export default Header;