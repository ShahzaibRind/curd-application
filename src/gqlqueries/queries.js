import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMERS = gql`
query getAllCustomers {
    customers {
      id
      name
      email
      role
      city {
          name
        }
    }
  }  
  `
 export const GET_ALL_CITIES = gql`
  query getAllCities {
      cities {
        id
        name
      }
    }  
  `
export const ADD_CUSTOMER = gql `
mutation AddCustomers($id: String, $name: String, $email: String, $role: String) {
    insert_customers(objects: {id: $id, name: $name, email: $email, role: $role}) {
      affected_rows
    }
  }
`
export const DELETE_CUSTOMER = gql `
mutation deleteCustomer($id: String!) {
    delete_customers(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`
export const GET_CUSTOMER = gql`
  query getCustomers($id: String) {
    customers(where: { id: { _eq: $id } }) {
      id
    }
  }
`;
export const UPDATE_CUSTOMERS = gql`
  mutation ($id: String, $name: String, $email: String, $role: String) {
    update_customers(
      where: { id: { _eq: $id } }
      _set: { name: $name, email: $email, role: $role }
    ) {
      affected_rows
    }
  }
`;