import { Button, Collapse } from "@chakra-ui/react"
import React from "react"


export default function TextModifier({children}) {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <>
        <Collapse startingHeight={250} in={show}>
          {children}
        </Collapse>
        <Button size='sm' onClick={handleToggle} mt='1rem' alignContent={'center'}>
          Show {show ? 'Less' : 'More'}
        </Button>
      </>
    )
  }