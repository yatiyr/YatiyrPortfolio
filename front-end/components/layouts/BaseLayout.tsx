import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import DarkModeSwitch from 'components/ui/DarkModeSwitch';
import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';
import { useState, useEffect } from 'react';
import ViewApi from 'lib/api/views';
import Head from 'next/head';
import axios from 'axios';
interface BaseLayoutProps {
    user : any;
    loading : any;
    children : any;
    page : any;
    backgroundColor : any;
}

const BaseLayout = (props : BaseLayoutProps) => {

  const { user, loading, children } = props;
  const iconBaseColor   = useColorModeValue("gray.900","gray.50");
  const iconHoverColor  = useColorModeValue("black", "white");
  const iconActiveColor = useColorModeValue("black", "white");
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
        <Head>
          <title>Eren&apos;s Portfolio</title>
          <meta property="og:image" content=""/>                   
        </Head>      
        <DarkModeSwitch 
          opacity={showHeader ? '0' : '1'}
          margin="0 0 0 20px" 
          baseColor={iconBaseColor} 
          hoverColor={iconHoverColor} 
          activeColor={iconActiveColor}
          position="fixed"
          width="4rem"
          height="4rem"/>     
        <Flex
          direction="column"
          align="center"
          alignItems="stretch"
          backgroundColor={props.backgroundColor}
        >
          <Flex
            direction="column"
            justifySelf="center"
            alignSelf="center"
            width={{sm: "100%", lmd: "100%", md: "100%", lg: "80%", xl: "1100px", "2xl": "1300px"}}>
            <Header
              user={user}
              loading={loading}/>          
          </Flex>
          <Flex
          direction="column"
            justifySelf="center"
            alignItems="center"
            alignSelf="center"
            width={{sm: "100%", lmd: "100%", md: "100%", lg: "100%", xl: "1200px", "2xl": "1400px"}}>
              {children}
              {/* Buraya footer girecek */}
          </Flex>
            <Footer/>
        </Flex>
    </>
  )
}

export default BaseLayout;