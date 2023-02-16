import EducationWorkInfoBox from 'components/ui/EducationWorkInfoBox';
import { useColorModeValue } from "@chakra-ui/react";
import { MetuIcon } from 'styles/icons/customIcons';

const Education = () => {


  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");
  const metuIconColor = useColorModeValue("red.500","red.300");

  return (
    <>
        <EducationWorkInfoBox
            title="METU" 
            icon={<MetuIcon baseColor={metuIconColor}/>}
            yearsBetween="2023-ongoing"
            details="PhD Computer Engineering"
            location="Ankara - Turkey"
            headingColor={headingColor}
            paragraphColor={paragraphColor}/>
        <EducationWorkInfoBox 
            title="METU" 
            icon={<MetuIcon baseColor={metuIconColor}/>}
            yearsBetween="2020-2023"
            details="M.Sc. Computer Engineering"
            cgpa="CGPA: 4.00"
            location="Ankara - Turkey"
            headingColor={headingColor}
            paragraphColor={paragraphColor}/>
        <EducationWorkInfoBox 
            title="METU" 
            icon={<MetuIcon baseColor={metuIconColor}/>}
            yearsBetween="2014-2019"
            details="B.Sc. Computer Engineering"
            cgpa="CGPA: 3.05"
            location="Ankara - Turkey"
            headingColor={headingColor}
            paragraphColor={paragraphColor}/>
    </>
  )

}

export default Education;