import { createRoot } from 'react-dom/client'
import {  RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import './index.css'
import 'animate.css';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes} />
);