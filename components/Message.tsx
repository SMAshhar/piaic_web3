import { Heading, Box, Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Message() {
    return (
        <VStack p={'16'}>
            
                <Heading py={8} color='#9B2C2C'>
                    Message By Faculty
                </Heading>
                <Text color='#9B2C2C'>The message from great Sir Zia</Text>
            
        </VStack>

    )
}