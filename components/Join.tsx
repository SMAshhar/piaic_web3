import { Box, Flex, Heading, Text, Image, Button, Link, Center } from "@chakra-ui/react"
import React from "react"
import { useRouter } from 'next/router'


export default function Join() {
    const router = useRouter()
    return (
        <Box>
            <Flex background={'ActiveBorder'} bgColor='#E2E8F0' p='16'>
                <Center flexDirection={'column'} p='16' w='full' px='3'>
                    <Heading textAlign={'center'} color='#9B2C2C' fontSize='7xl' py={'6'}>Join to be part of the revolution.</Heading>
                    <Text p='12' textAlign={'center'} fontSize='3xl'>Citi is the latest Wall Street business to give a positive prognosis for
                        Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and
                        virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable
                        market of up to $13 trillion and five billion people by 2030.

                    </Text>
                    <Button p={10} size='md'
                        height='48px'
                        width='200px'
                        border='2px' fontFamily='sans-serif' fontSize={'5xl'} color='#9B2C2C' onClick={() => router.push('https://portal.piaic.org/signup')} variant='solid'>Join</Button>
                </Center>
                <Box w='full' alignItems={'center'} p='20'>
                    <Image position={'relative'} p='8' py='24' objectFit='cover' src='https://qph.cf2.quoracdn.net/main-qimg-996b56dd84d66d45240f42d9f06fb73f-pjlq' fallbackSrc='https://via.placeholder.com/150' />
                </Box>
            </Flex>
        </Box>
    )
}