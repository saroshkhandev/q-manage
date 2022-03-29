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
import { useRef, useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState()
  const prodList = []
  let check = useRef(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/allprod')
      const json = await res?.json()
      setProducts(json.usr)
      console.log(products?.usr)
      console.log(json.usr)
      // console.log(json.usr[0]);
      check = json.usr
    }

    fetchData()
  }, [])
  function printData() {
    console.log(check)
  }
  return (
    <VStack h="full" w="full" p={10}>
      <div>
        <button onClick={printData}>click</button>

        {/* <h2>{
        
         products?.usr.map((index)=>{
           <li>${index}</li>
         })

        }</h2> */}
      </div>
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
          {products && products.map(product => (
            <Tr>
              <Td>{product.prod_name}</Td>
              <Td>Electronics</Td>
              <Td isNumeric>{product.prod_price}</Td>
            </Tr>
          ))}
          {/* <Tr>
            <Td>Denver</Td>
            <Td>Beauty Products</Td>
            <Td isNumeric>253</Td>
          </Tr>
          <Tr>
            <Td>Keyring</Td>
            <Td>Accessories</Td>
            <Td isNumeric>4</Td>
          </Tr> */}
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
