import React from 'react'
import NavbarComp from './NavbarComp'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
      <NavbarComp/>
      <main><Outlet></Outlet></main>  
    </div>
  )
}

export default RouteLayout
