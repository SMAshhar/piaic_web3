import React from "react";
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function Intro() {
    return (
        <Box p='8'>
            <Flex background={'ActiveBorder'} bgColor='#E2E8F0' p='16'>
                <Box alignContent={'center'} p='16' w='full' px='3'>
                    <Heading textAlign={'center'} color='#9B2C2C' fontSize='7xl' py={'6'}>What is Panaverse DAO?</Heading>
                    <Text textAlign={'center'} fontSize='3xl'>In this brand-new type of curriculum, students will learn how
                        to make money and boost exports in the classroom and will begin doing so within six months of the program's
                        beginning. It resembles a cross between a corporate venture and an educational project.
                    </Text>
                </Box>
                <Box w='full' alignItems={'center'} px='3'>
                    <Image position={'relative'} p='8
                    ' objectFit='cover' src='https://www.panaverse.co/red-p-logo-text_dao_croped.png' fallbackSrc='https://via.placeholder.com/150' />
                </Box>
            </Flex>
        </Box>
    )
}