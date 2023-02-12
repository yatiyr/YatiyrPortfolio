import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Cv = () => {
  // Load user information
  const data = "user";
  const loading = false;

  const backgroundColor = useColorModeValue("white", "gray.900");
  
  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        page="Cv">
        <>
            <Heading color={backgroundColor}>Cv page</Heading>
        </>                                                                                                            
      </BaseLayout>
    </>
  )

}

export default Cv;