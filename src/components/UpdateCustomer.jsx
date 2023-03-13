import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import {
    Box,
    Button,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react';
import Cities from './Cities';
import { useMutation } from '@apollo/client';
import { EditIcon } from '@chakra-ui/icons'
import { GET_ALL_CUSTOMERS, UPDATE_CUSTOMERS } from '../gqlqueries/queries';

function UpdateCutomer({ data }) {

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [id, setId] = useState(data.id)
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [role, setRole] = useState(data.role)
    const [updateCustomer] = useMutation(UPDATE_CUSTOMERS)
    const handleUpdate = () => {
        const date = { id, name, email, role }
        updateCustomer({
            variables: {
                id: date.id,
                email: date.email,
                name: date.name,
                role: date.role,
            }, refetchQueries: [
                { query: GET_ALL_CUSTOMERS }
            ]
        })
        onClose()
        toast({
            title: "Cutomer Updated",
            description: "you have updated the customer",
            status: "success",
            duration: 9000,
            isClosable: true,
        })
    }

    useEffect(() => {
        if (data) {
            setId(data.id)
            setName(data.name)
            setEmail(data.email)
            setRole(data.role)
        }
    }, [data?.id])

    return (
        <>
            <Box textAlign={'center'}>
                <IconButton
                    colorScheme='teal'
                    aria-label='Call Segun'
                    size='md'
                    icon={<EditIcon />}
                    onClick={onOpen}
                />

            </Box>
            <form >
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}>
                    <ModalOverlay />

                    <ModalContent>
                        <ModalHeader>Update The Data</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Id</FormLabel>
                                <Input
                                    value={id}
                                    onChange={e => setId(e.target.value)}
                                    type='text' placeholder='Id' />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    value={name}
                                    onChange={e => setName(e.target.value)}

                                    type='text' placeholder='Name' />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}

                                    type="email" placeholder='Email' />
                            </FormControl >
                            <FormControl mt={4} isRequired>
                                <FormLabel>Role</FormLabel>
                                <Input
                                    value={role}
                                    onChange={e => setRole(e.target.value)}

                                    type="text" placeholder='Role' />
                            </FormControl>
                            <Cities />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={() => handleUpdate()}

                                bg={"teal.300"} color={'#ffffff'} mr={3}>
                                Save
                            </Button>
                            <Button bg={'red.300'} color={'#ffffff'} onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    )
}
export default UpdateCutomer;