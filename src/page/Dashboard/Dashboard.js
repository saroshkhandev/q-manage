import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <VStack h="full" p={10}>
      <HStack gap={5}>
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="100px"
          color="white"
          borderRadius={5}
        >
          <Text fontSize="xl" fontWeight="bold">
            Active Users
          </Text>
          <Text>Active: 4</Text>
        </Box>
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="100px"
          color="white"
          borderRadius={5}
          as={RouterLink}
          to="/users"
        >
          <Text fontSize="xl" fontWeight="bold">
            Customers
          </Text>
        </Box>
        <Box
          bg="#2D8EFF"
          p={5}
          w="300px"
          h="100px"
          color="white"
          borderRadius={5}
          as={RouterLink}
          to="/sales"
        >
          <Text fontSize="xl" fontWeight="bold">
            Sales
          </Text>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Dashboard
