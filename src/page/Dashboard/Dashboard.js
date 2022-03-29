import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import { BsGraphUp } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

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
          _hover={{ boxShadow: '0 16px 32px rgba(0,0,0,0.07)' }}
        >
          <VStack align="center" margin="auto 0">
            <BsGraphUp />
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
