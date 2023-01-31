import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Courses() {
    return (
        <VStack>
        <Flex w='full' color='#9B2C2C' px='8' >
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'>
                        Web 3.0 (Blockchain) and Metaverse
                    </Heading>
                    <Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                </Flex>
            </Box>
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'>
                        Artificial Intelligence (AI) and Deep Learning
                    </Heading>
                    <Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                </Flex>
            </Box>
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'>
                        Cloud-Native Computing
                    </Heading>
                    <Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                </Flex>
            </Box>
        </Flex>
        <Flex w='full' color='#9B2C2C' px='8'>
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'>
                        Ambient Computing and IoT
                    </Heading>
                    <Text px='8' fontSize={24}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices..</Text>
                </Flex>
            </Box>
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'fontSize={'54'}>
                        Genomics and Bioinformatics
                    </Heading>
                    <Text px='8' fontSize={24}>This is the detail about the subject BCC.</Text>
                </Flex>
            </Box>
            <Box textAlign={'center'}>
                <Flex textAlign={'center'} boxShadow='lg' p='16'>
                    <Heading p='8'>
                        Network Programmability and Automation
                    </Heading>
                    <Text px='8' fontSize={24}>This is the detail about the subject BCC.</Text>
                </Flex>
            </Box>
        </Flex>
        </VStack>
    )
}