import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar/NavBar'
import Products from '../pages/Products'
import Item from "../pages/Item"
import Category from '../pages/Category'
import Cart from '../pages/Cart'
import Footer from '../components/Footer/Footer'

const MainRauter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/products' element={<Products/>} />
                <Route exact path='/category/:categoryId' element={<Category/>} />
                <Route exact path='/products/:itemId' element={<Item/>} />
                <Route exact path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default MainRauter