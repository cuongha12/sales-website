import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Component/Nav/Nav'

const Test = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Test