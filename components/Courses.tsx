import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TextModifier from "@/pages/showmore";

export default function Courses() {
    return (
        <VStack>
            <Flex w='full' color='#9B2C2C' px='8' >
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8'>
                            Web 3.0 (Blockchain) and Metaverse
                        </Heading>
                        <TextModifier><Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web
                            3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds
                            that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client
                            experiences.
                        </Text>
                            <Text px='8' fontSize={20} textAlign='left'>
                                Quarter IV
                                W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

                                Quarter V
                                MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                            </Text></TextModifier>
                    </Flex>
                </Box>
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8'>
                            Artificial Intelligence (AI) and Deep Learning
                        </Heading>
                        <TextModifier><Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing
                            full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in
                            building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse
                            client experiences.</Text>
                            <Text px='8' fontSize={20} textAlign='left'>
                                Quarter IV
                                AI-351: Developing Planet-Scale Intelligent APIs and Python Programming

                                Quarter V
                                AI-361: Deep Learning and MLOps
                            </Text></TextModifier>
                    </Flex>
                </Box>
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8' px={'24'}>
                           Cloud-Native Computing
                        </Heading>
                        <TextModifier><Text px='8' fontSize={24}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web
                            3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds
                            that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client
                            experiences.</Text>
                            <Text px='8' fontSize={24}>
                                Quarter IV
                                CN-351: Certified Kubernetes Application Developer (CKAD)

                                Quarter V
                                CN-361: Developing Multi-Cloud APIs using CDK for Terraform
                            </Text>
                        </TextModifier>
                    </Flex>
                </Box>
            </Flex>
            <Flex w='full' color='#9B2C2C' px='8'>
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8' px={'16'}>
                            Ambient Computing and IoT
                        </Heading>
                        <TextModifier><Text px='8' fontSize={24}>The Ambient Computing and IoT Specialization focuses on building
                            Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
                            The Internet of Things (IoT) and ambient computing are directly related. IoT describes the smart home and
                            how the devices connect. Ambient computing is what happens when these devices are connected, and more so,
                            what they learn from each other.</Text>
                            <Text px='8' fontSize={20} textAlign='left'>
                                Quarter IV
                                AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices

                                Quarter V
                                AC-361: Embedded Programming using C and Rust
                            </Text></TextModifier>
                    </Flex>
                </Box>
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8' px={'16'}>
                            Genomics and Bioinformatics
                        </Heading>
                        <TextModifier><Text px='8' fontSize={24}>Genomics is the study of the total genetic makeup
                            of individual organisms, and how this genetic information is structured, functions
                            , and has evolved; bioinformatics encompasses a diverse range of analytical
                            methods and tools applied to genomic data. This Specialization focuses on
                            performing complex bioinformatics analysis using the most essential Python libraries
                            and applications.</Text>
                            <Text px='8' fontSize={20} textAlign='left'>
                                Quarter IV
                                Bio-351: Python for Biologists

                                Quarter V
                                Bio-361: Bioinformatics with Python
                            </Text></TextModifier>
                    </Flex>
                </Box>
                <Box textAlign={'center'}>
                    <Flex textAlign={'center'} boxShadow='lg' p='16' direction={'column'} boxSize='700'>
                        <Heading p='8'>
                            Network Programmability and Automation
                        </Heading>

                        <TextModifier><Text px='8' fontSize={24}>More than ever, network engineers are finding it
                            challenging to complete their duties entirely manually. Network automation is now crucial
                            due to new protocols, technologies, delivery models, and the requirement for enterprises
                            to become more adaptable and agile. This course teaches network engineers how to automate
                            systems with code using a variety of technologies and tools, including Linux, Python, APIs,
                            and Git..</Text>
                            <Text px='8' fontSize={20} textAlign='left'>
                                Quarter IV
                                NPA-351: CCNA 200-301 Certification

                                Quarter V
                                NPA-361: Network Programmability and Automation
                            </Text></TextModifier>
                    </Flex>
                </Box>
            </Flex>
        </VStack>
    )
}