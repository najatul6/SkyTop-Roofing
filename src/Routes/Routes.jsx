import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home/Home'
import Layout from '../Layout/Layout'

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default Routes