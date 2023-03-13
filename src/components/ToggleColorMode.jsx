import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Button
    m = "1rem"
    onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? <SunIcon color={"orange.500"}/>: <MoonIcon color={'blackAlpha.900'}/>}
    </Button>
  )
}

export default ToggleColorMode