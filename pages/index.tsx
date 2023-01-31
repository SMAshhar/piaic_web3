import React from "react"
import Header from "../components/Header"
import { ChakraProvider } from "@chakra-ui/react"
import Intro from "@/components/Intro"
import Courses from "@/components/Courses"
import Message from "@/components/Message"

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Intro />
      <Courses />
      <Message />
      <Header>Made By: Syed Muhammad Ashhar</Header>
    </ChakraProvider>
  )
}
