import React from 'react'
import { useQuery } from '@apollo/client'
import { FormControl, FormLabel, Select, Spinner } from '@chakra-ui/react'
import { GET_ALL_CITIES } from '../gqlqueries/queries'

const Cities = () => {
    const { loading, error, data } = useQuery(GET_ALL_CITIES)
    if (loading) return <h1>
        <Spinner />
    </h1>
    if (error) {
        console.log(error.message);
    }
    return (
        <div>
            <FormControl mt={4} isRequired>
                <FormLabel>City</FormLabel>
                <Select placeholder='Select option'>
                    {
                        data.cities.map(city => {
                            return (
                                <option value='option1'>{city.name}</option>

                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default Cities;
