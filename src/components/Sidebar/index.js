import { Link, VStack } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <VStack w="200px" minW="200px" bg="#fafafa" p={3} h="100vh" gap={3}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Sales</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
    </VStack>
  )
}

export default Sidebar
