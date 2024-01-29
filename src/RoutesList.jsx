import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Main from './components/Main';


const RoutesList = () => {
    return (

        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/main' element={<Main />} />
        </Routes>
    )
}

export default RoutesList