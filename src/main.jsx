import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from "./Home/Home.jsx"
import Member from "./Pages/Member.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Signup from "./Pages/Signup.jsx"
import Signin from "./Pages/Signin.jsx"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
  <Route path='' element={<Home/>}/>
  <Route path="/member" element={<Member/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/signin' element={<Signin/>}/>

  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
