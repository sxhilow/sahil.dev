import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'

const Layout = () => {
  
  return (
    <>
      <Navbar/>
      <ScrollTop/>
      <Outlet/>
    </>
  )
}

export default Layout