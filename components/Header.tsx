import React from 'react'
import { Flex, Link, Box, Image, Text } from '@chakra-ui/react'


export default function Header({children=''}) {

    return (
        <div>
            <Flex color={'#E2EE8F0'}>
                <Flex color='#9B2C2C' bgColor={'#EDF2F7'} alignItems='center' p={5} w='full' border={'2px'}>
                    <Link href='/' px={5} pt={3} fontFamily='body'fontSize={'20'} fontWeight='bold'>Home</Link>
                    <Link href='https://www.piaic.org' px={5} pt={3} fontFamily='body' fontSize={'20'} fontWeight='bold'>Admission</Link>
                    <Link href='https://www.piaic.org' px={5} pt={3} fontFamily='body'fontSize={'20'} fontWeight='bold'>About</Link>
                    <Box w='full'>
                    <Image boxSize='150' justifyContent={'center'} w='200' px='700' src='https://www.panaverse.co/red-p-logo-text_dao_croped.png'/></Box>
                    <Link href='https://www.piaic.org' alignContent={'flex-end'} pt={3} fontFamily='body' fontSize={'20'} fontWeight='bold'>PIAIC Website</Link>
                    
                </Flex>
                
            </Flex>
            <Text textAlign={'right'}>{children}</Text>

        </div>
    )
}