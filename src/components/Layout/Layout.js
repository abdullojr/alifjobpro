import React from 'react'
import Header from '../App/Header/Header'
import Product from '../Product/Product'
import { Routes, Route } from 'react-router-dom'
import Favs from '../Favs/Favs'

export default function Layout() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Product />} />
                <Route path='/favs' element={<Favs />} />
            </Routes>
        </div>
    )
}
