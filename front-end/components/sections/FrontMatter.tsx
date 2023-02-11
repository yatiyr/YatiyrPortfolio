import React from 'react';
import { Box, Heading, Avatar, useColorModeValue } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Image } from '@chakra-ui/react';

const FrontMatter = ({ matter } : any) => {

    const headingColor = useColorModeValue("gray.800", "gray.200");
    const textColor    = useColorModeValue("gray.600", "gray.500");

    return (
        <Box>
            <Heading as="h1" size="2xl" color={headingColor} fontFamily="Ubuntu">
                {matter.title}
            </Heading>
            <Box display="flex" justifyContent="space-between" my="5px">
                <Box>
                    <Avatar
                        size="sm"
                        src={'https://avatars0.githubusercontent.com/yatiyr'}
                        //alt={'Author'}
                        borderRadius="4px"
                    />
                    <Box as="span" fontSize="sm" ml="10px" color={textColor}>
                        Eren Dere -- {format(parseISO(matter.publishedAt), 'dd MMMM, yyyy')}
                    </Box>
                </Box>
                <Box fontSize="sm" display="flex" alignItems="center" color={textColor}>
                    <AiOutlineFieldTime /> &nbsp;
                    {matter.readingTime.text}
                </Box>
            </Box>
            <Image objectFit="cover" alt="headImage" src={`${process.env.PORTFOLIO_API_URL}/media/${matter.headImageUrl}`} width="100%" height={712 / 2}/>
        </Box>
    );
};

export default FrontMatter;