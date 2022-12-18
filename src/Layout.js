import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Outlet />
    
    </>
  )
}

export default Layout