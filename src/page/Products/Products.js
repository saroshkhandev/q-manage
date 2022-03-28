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

const Products = () => {
  return (
    <VStack h="full" w="full" p={10}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Products Stock Availability</TableCaption>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Section</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Mi Tv</Td>
            <Td>Electronics</Td>
            <Td isNumeric>24</Td>
          </Tr>
          <Tr>
            <Td>Denver</Td>
            <Td>Beauty Products</Td>
            <Td isNumeric>253</Td>
          </Tr>
          <Tr>
            <Td>Keyring</Td>
            <Td>Accessories</Td>
            <Td isNumeric>4</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Product Name</Th>
            <Th>Section</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Tfoot>
      </Table>
    </VStack>
  )
}

export default Products
