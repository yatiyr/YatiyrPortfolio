import { useColorModeValue } from "@chakra-ui/react";
import EducationWorkInfoBox from 'components/ui/EducationWorkInfoBox';
import { MetuIcon, RsIcon } from 'styles/icons/customIcons';

const Work = () => {


  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");

  const metuIconColor = useColorModeValue("red.500","red.300");
  const rsIconColor = useColorModeValue("green.400", "green.200");

  return (
    <>
        <EducationWorkInfoBox 
            title="METU" 
            icon={<MetuIcon baseColor={metuIconColor}/>}
            yearsBetween="2021-Ongoing"
            details="Research/Teaching Assistant"
            location="Ankara - Turkey"
            headingColor={headingColor}
            paragraphColor={paragraphColor}/>
        <EducationWorkInfoBox 
            title="Roketsan" 
            icon={<RsIcon baseColor={rsIconColor}/>}
            yearsBetween="2019-2021"
            details="Software Engineer"
            location="Ankara - Turkey"
            headingColor={headingColor}
            paragraphColor={paragraphColor}/>           
    </>
  )

}

export default Work;