import { Image, Flex, Button, HStack, chakra, Link, Box } from '@chakra-ui/react';
import React from "react";
import navLogo from "../assets/logo.png"
import ToggleColorMode from './ToggleColorMode';


export default function Header() {
    return (
        <chakra.header pl={{sm:'0', lg: '10'}} pr={{sm: '0', lg: '10'}} boxShadow='xl' rounded='md' bg='white'> 
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Link>
                    <Image w={'100%'} src={navLogo} h="50px" />
                </Link>
                <HStack as="nav" spacing="5">
                    <Link>
                        <Button colorScheme={'twitter'} bg={'teal.400'} color={"white"}>Home</Button>
                    </Link>
                </HStack>
                <HStack>
                    <Box textAlign={'center'}>
                        <Button colorScheme={'twitter'} bg={"teal.300"} color={'#ffffff'}>Get Started</Button>
                    </Box>
                    <ToggleColorMode />
                </HStack>
            </Flex>
        </chakra.header>
    );
}