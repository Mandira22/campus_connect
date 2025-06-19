import React from 'react'
import Navbar from './Navbar'
import SubscribeSection from './Subscribe'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <SubscribeSection/>
   </>
  )
}

export default Layout
