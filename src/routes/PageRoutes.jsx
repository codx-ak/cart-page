import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Page/Products'
import Cart from '../Page/Cart'
const PageRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default PageRoutes