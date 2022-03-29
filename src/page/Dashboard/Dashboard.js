import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Dashboard = () => {
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
          _hover={{ border: '1px solid black' }}
        >
          <VStack align="center" margin="auto 0">
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
          _hover={{ border: '1px solid black' }}
        >
          <VStack align="center" margin="auto 0">
            <Text fontSize="xl" fontWeight="bold">
              Customers
            </Text>
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
          _hover={{ border: '1px solid black' }}
        >
          <VStack align="center" margin="auto 0">
            <Text fontSize="xl" fontWeight="bold">
              Sales
            </Text>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Dashboard
