import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home/Home'
import Layout from '../Layout/Layout'
import About from '../Pages/About/About'

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    }
])

export default Routes