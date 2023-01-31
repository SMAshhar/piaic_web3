import React from "react"
import { Flex, Heading, Input, Button } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/provider"
import Admission from "./Admission"

function loginPg(){
    return(
<ChakraProvider>
   
  <Admission />
</ChakraProvider>
 )
}
export default loginPg
