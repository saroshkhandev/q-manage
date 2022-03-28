import './App.css'
import { HStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Dashboard from './page/Dashboard/Dashboard'
import { Routes, Navigate } from 'react-router-dom'
import { Route } from 'react-router'
import Users from './page/Users/Users'
import Products from './page/Products/Products'

function App() {
  return (
    <HStack h="100%" w="100%">
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
      <Dashboard />
    </HStack>
  )
}

export default App
