import React from 'react'
import NavbarComp from './NavbarComp'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store'

const RouteLayout = () => {
  return (
    <div>
      <Provider store={store}>
      <NavbarComp />
      <main><Outlet></Outlet></main>  
      </Provider>
    </div>
  )
}

export default RouteLayout
