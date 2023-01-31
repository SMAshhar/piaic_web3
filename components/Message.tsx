import { Heading, Box, Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Message() {
    return (
        <VStack p={'16'}>

            <Heading py={8} color='#9B2C2C' fontSize={'5xl'}>
                Message By Sir Zia Khan
            </Heading>
            <Text color='#9B2C2C' p='6' textAlign={'center'} fontSize='3xl'>
                Among many things, the one thing that motivates me the most to serve my nation is
                the poor children on the street, collecting gargabe to survive. They don't belong
                in the trash of the city but in schools. I dream of a day when I can see them where
                they belong. By following this program, I am confident that we can bring difference
                to the daily lives of these kids.</Text>

        </VStack>

    )
}