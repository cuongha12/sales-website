import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Navbar from '../../Component/Navbar/Nabar';

const Main = () => {
    return (
        <>
            <Header />
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Main