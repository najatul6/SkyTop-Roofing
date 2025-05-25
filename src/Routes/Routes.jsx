import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home/Home'
import Layout from '../Layout/Layout'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Contact from '../Pages/Contact/Contact'
import Blog from '../Pages/Blog/Blog'

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
            },
            {
                path:"services",
                element:<Services/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"blog",
                element:<Blog/>
            }
        ]
    }
])

export default Routes