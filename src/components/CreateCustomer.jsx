import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import {
  Box,
  Button,
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
import { GET_ALL_CUSTOMERS } from '../gqlqueries/queries';
import { ADD_CUSTOMER } from '../gqlqueries/queries';

function InitialFocus() {
  const toast = useToast()
  const [customer, setCustomer] = useState({
    email: '',
    id: '',
    name: '',
    role: ''
  })
  const [addCustomer] = useMutation(ADD_CUSTOMER)
  const onSubmit = e => {
    e.preventDefault();
    addCustomer({
      variables: {
        id: customer.id,
        email: customer.email,
        name: customer.name,
        role: customer.role,
      }, refetchQueries: [
        { query: GET_ALL_CUSTOMERS }
      ]
    })
    onClose()
  }
  const submitHandler = e => {
    e.preventDefault();
    addCustomer({
      variables: {
        email: customer.email,
        id: customer.id,
        name: customer.name,
        role: customer.role,
      }, refetchQueries: [
        { query: GET_ALL_CUSTOMERS }
      ]
    })
    onClose()
    toast({
      title: "Cutomer Added",
      description: "you have created new customer",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Box textAlign={'center'}>
        <Button bg={"teal.300"} color={'#ffffff'} onClick={onOpen}>Add New Customer</Button>
      </Box>
      <form onSubmit={onSubmit}>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>Update The Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Id</FormLabel>
                <Input
                  value={customer.id}
                  onChange={e => setCustomer({ ...customer, id: e.target.value })}
                  type='text' placeholder='Id' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={customer.name}
                  onChange={e => setCustomer({ ...customer, name: e.target.value })}
                  type='text' placeholder='Name' />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={customer.email}
                  onChange={e => setCustomer({ ...customer, email: e.target.value })}
                  type="email" placeholder='Email' />
              </FormControl >
              <FormControl mt={4} isRequired>
                <FormLabel>Role</FormLabel>
                <Input
                  value={customer.role}
                  onChange={e => setCustomer({ ...customer, role: e.target.value })}
                  type="text" placeholder='Role' />
              </FormControl>
              <Cities />
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={submitHandler} bg={"teal.300"} color={'#ffffff'} mr={3}>
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
export default InitialFocus;