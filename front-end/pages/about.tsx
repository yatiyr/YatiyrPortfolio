import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue, Flex} from "@chakra-ui/react";
import WelcomeSection from 'components/sections/WelcomeSection';
import Education from 'components/sections/Education';
import Work from 'components/sections/Work';

const About = () => {
  // Load user information
  const data = "user";
  const loading = false;

  const backgroundColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        page="About">
        <Flex flexDirection="column">
            <WelcomeSection/>
            <Heading
                mx={{sm: "50px", lmd: "140px", md: "160px", lg: "180px", xl: "200px", "2xl": "350px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "10px", lmd: "10px", md: "10px", lg: "10px", xl: "10px", "2xl": "10px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={headingColor}>Education</Heading>
            <Flex flexDirection="column" mx={{sm: "50px", lmd: "140px", md: "160px", lg: "180px", xl: "200px", "2xl": "350px"}} width={{sm: "80%", lmd: "500px", md: "500px", lg: "600px", xl: "600px", "2xl": "600px"}} justifySelf="center" alignSelf={{sm: "center", lmd: "center", md: "start", lg: "start", xl: "start", "2xl": "start"}}>
              <Education/> 
            </Flex>

            <Heading
                mx={{sm: "50px", lmd: "140px", md: "160px", lg: "180px", xl: "200px", "2xl": "350px"}} 
                alignSelf="end"
                textAlign="center" 
                my={{sm: "10px", lmd: "10px", md: "10px", lg: "10px", xl: "10px", "2xl": "10px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={headingColor}>Work Experience</Heading>
            <Flex flexDirection="column" mx={{sm: "50px", lmd: "140px", md: "160px", lg: "180px", xl: "200px", "2xl": "350px"}} width={{sm: "80%", lmd: "500px", md: "500px", lg: "600px", xl: "600px", "2xl": "600px"}} justifySelf="center" alignSelf={{sm: "center", lmd: "center", md: "end", lg: "end", xl: "end", "2xl": "end"}}>
              <Work/>
            </Flex>                                                      
        </Flex>                                                                                                            
      </BaseLayout>
    </>
  )

}

export default About;