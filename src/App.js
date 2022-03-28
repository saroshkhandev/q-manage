import './App.css'
import { HStack, VStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Dashboard from './page/Dashboard/Dashboard'
import { Routes, Navigate } from 'react-router-dom'
import { Route } from 'react-router'
import Users from './page/Users/Users'
import Products from './page/Products/Products'

function App() {
  return (
    <VStack h="100vh" w="100vw" spacing="unset">
      <HStack h="100%" w="100%">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </HStack>
    </VStack>
  )
}

export default App
