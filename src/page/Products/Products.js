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
  Button,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Products = () => {
  return (
    <VStack h="full" w="full">
      <Box p="20px" m={2} bg="DFDFDE" w="full">
        <Button
          align="left"
          bg="#4D96FF"
          color="#FFFFFF"
          as={RouterLink}
          to="/products/add"
        >
          Add Product
        </Button>
      </Box>
      <Box p={4} w="full">
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
      </Box>
    </VStack>
  )
}

export default Products
