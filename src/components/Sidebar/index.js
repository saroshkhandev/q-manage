import { Box, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Box w="200px" minW="200px" bg="#edf2f7" p={8} h="100vh">
      <VStack gap={3} align="left">
        <Text fontWeight="bold" fontSize="lg">
          Queue Manager
        </Text>
        <Link
          href="/dashboard"
          _hover={{ textDecoration: 'none', fontWeight: 'bold' }}
        >
          Dashboard
        </Link>
        <Link href="/sales" _hover={{ textDecoration: 'none', fontWeight: 'bold' }}>
          Sales
        </Link>
        <Link
          href="/users"
          _hover={{ textDecoration: 'none', fontWeight: 'bold' }}
        >
          Customers
        </Link>
        <Link
          href="/products"
          _hover={{ textDecoration: 'none', fontWeight: 'bold' }}
        >
          Products
        </Link>
      </VStack>
    </Box>
  )
}

export default Sidebar
