import { React } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Spinner,
} from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CUSTOMERS } from '../gqlqueries/queries'
import UpdateCustomer from './UpdateCustomer'
import DeleteCustomer from './DeleteCustomer'

const TableData = () => {
    const {loading, error, data} = useQuery(GET_ALL_CUSTOMERS)
    if (loading) return <h1>
        <Spinner />
    </h1>
    if (error) {
        console.log(error.message);
    }
    return (
        <div>
            <TableContainer p={{sm: '0', md:'10', lg: '10' }} pb={{sm: '0', md: "0", lg: '0'}}>
                <Table variant='simple'>
                    <TableCaption>Fetch The Data From Customer and City Table</TableCaption>
                    <Thead>
                        <Tr>
                            <Th fontWeight={'black'}>ID</Th>
                            <Th fontWeight={'black'}>Name</Th>
                            <Th fontWeight={'black'}>Email</Th>
                            <Th fontWeight={'black'}>Role</Th>
                            <Th fontWeight={'black'}>City</Th>
                            <Th fontWeight={'black'}>Edit</Th>
                            <Th fontWeight={'black'}>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.customers.map(customer => {
                                return (
                                    <Tr>
                                        <Td>{customer.id}</Td>
                                        <Td>{customer.name}</Td>
                                        <Td>{customer.email}</Td>
                                        <Td>{customer.role}</Td>
                                        <Td>{customer.city.name}</Td>
                                        <Td>
                                            <UpdateCustomer data={customer}/>
                                        </Td>
                                        <Td>
                                            <DeleteCustomer id={customer.id}/>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default TableData;