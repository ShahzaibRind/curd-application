import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_CUSTOMER, GET_ALL_CUSTOMERS } from '../gqlqueries/queries'

function DeleteCustomer({ id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [deleteCustomer] = useMutation(DELETE_CUSTOMER)
    const cancelRef = React.useRef()
    const onDeleteHandler = (e) => {
        e.preventDefault();
        deleteCustomer({
            variables: {
                id: id,
            }, refetchQueries: [
                { query: GET_ALL_CUSTOMERS }
            ]
        })

        onClose()

    }
    return (
        <>
            <IconButton
                onClick={onOpen}
                colorScheme='red'
                aria-label='Call Segun'
                size='md'
                icon={<DeleteIcon />}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onDeleteHandler} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
export default DeleteCustomer;