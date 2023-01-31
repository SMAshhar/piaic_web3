//under works

import React from 'react'
import { Flex, Heading, Button, Input } from "@chakra-ui/react"


function Admission() {
    return (
        <Flex height={'200'} alignItems='center' justifyContent={'center'}>
            <Flex direction={'column'} background='#EDF2F7' p='12' rounded={'16'}>
                <Heading mb='6'>Log in</Heading>
                <Input placeholder="abc@def.com" variant='filled' mb='3' type={'email'} />
                <Input placeholder="*********" variant='filled' mb='6' type={'password'} />
                <Button colorScheme='grey.100'>Log in</Button>
            </Flex>
        </Flex>
    )
}
export default Admission
