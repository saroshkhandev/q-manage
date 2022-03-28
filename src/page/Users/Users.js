import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const Users = () => {
  return (
    <VStack h="full" w="full" p={10}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Users List</TableCaption>
        <Thead>
          <Tr>
            <Th>User Name</Th>
            <Th>Pending Order</Th>
            <Th isNumeric>Joined</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Sarosh</Td>
            <Td>Yes</Td>
            <Td isNumeric>24-Apr</Td>
          </Tr>
          <Tr>
            <Td>Vishal Singh</Td>
            <Td>No</Td>
            <Td isNumeric>28-Apr</Td>
          </Tr>
          <Tr>
            <Td>Sneha</Td>
            <Td>No</Td>
            <Td isNumeric>21-Apr</Td>
          </Tr>
          <Tr>
            <Td>Aariz</Td>
            <Td>Yes</Td>
            <Td isNumeric>22-Apr</Td>
          </Tr>
          <Tr>
            <Td>Priyanshu</Td>
            <Td>Yes</Td>
            <Td isNumeric>23-Apr</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>User Name</Th>
            <Th>Pending Order</Th>
            <Th isNumeric>Joined</Th>
          </Tr>
        </Tfoot>
      </Table>
    </VStack>
  )
}

export default Users
