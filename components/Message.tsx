import { Heading, Box, Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Message() {
    return (
        <VStack p={'16'}>
            
                <Heading py={8} color='#9B2C2C'>
                    Message By Sir Zia Khan
                </Heading>
                <Text color='#9B2C2C'>Save the country and get rich in the process</Text>
            
        </VStack>

    )
}