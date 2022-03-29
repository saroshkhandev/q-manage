import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { BsGraphUp } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

const Dashboard = () => {
  const [products, setProducts] = useState()
  const [customerLength, setCustomerLength] = useState(0)
  const [totalSales, setTotalSales] = useState()

  const prodList = []
  let check = useRef(null)
  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await fetch('http://localhost:4000/customers')
      const json = await res?.json()
      setProducts(json.usr)
      
      console.log(products?.usr)
      console.log(json.usr)
      console.log(products?.length)
      // setCustomerLength(products?.length)
    }

    const fetchSales = async() =>{
    const res = await fetch('http://localhost:4000/sales')
    const json = await res?.json();

    setTotalSales(json);
    console.log(totalSales.sales[0].total_sales)
    }
    fetchCustomers()
    fetchSales()
  }, [])
  return (
    <VStack h="full" p={10} bg="#EFFFFD" w="full">
      <HStack gap={5} justify="space-between">
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="200px"
          color="white"
          borderRadius="20px"
          _hover={{ boxShadow: '0 16px 32px rgba(0,0,0,0.07)' }}
        >
          <VStack align="center" margin="auto 0">
            <FiUsers />
            <Text fontSize="xl" fontWeight="bold">
              Active Users
            </Text>
            <Text>Active: 4</Text>
          </VStack>
        </Box>
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="200px"
          color="white"
          borderRadius="20px"
          as={RouterLink}
          to="/users"
          _hover={{ boxShadow: '0 16px 32px rgba(0,0,0,0.07)' }}
        >
          <VStack align="center" margin="auto 0">
            <BiUserCircle />
            <Text fontSize="xxl" fontWeight="bold">
              Customers
            </Text>
            <Text>{products && products?.length}</Text>
          </VStack>
        </Box>
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="200px"
          color="white"
          borderRadius="20px"
          as={RouterLink}
          to="/sales"
          _hover={{ boxShadow: '0 16px 32px rgba(0,0,0,0.07)' }}
        >

          <VStack align="center" margin="auto 0">
            <BsGraphUp />
            <Text fontSize="xl" fontWeight="bold">
              Sales
              <p>
                {totalSales?.sales[0].total_sales}
              </p>
            </Text>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Dashboard
