import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import './index.css'
import Layout from './Components/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<h1>Home</h1>} />
    <Route path='about' element={<h1>About</h1>} />
    <Route path='contact' element={<h1>Contact</h1>} />
    <Route path='cart' element={<h1>Cart</h1>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />)
