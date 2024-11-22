import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './sections/Home.jsx'
import Projects from './sections/Projects.jsx'
import Resume from './sections/Resume.jsx'
import { quote } from './components/QuoteCard.jsx'
import { ThemeProvider } from './context/theme.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path='/' 
    element={
      <ThemeProvider>
        <Layout/>
      </ThemeProvider>
    }>
      <Route 
       path='/' 
       element={<Home/>}
       loader={quote}
      />
      <Route 
       path='/projects' 
       element={<Projects/>}
      />
      <Route
      path='/resume'
      element={<Resume/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    
      <RouterProvider router={router}/>
    
  </StrictMode>
  
)
