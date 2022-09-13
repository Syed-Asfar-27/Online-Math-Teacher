import React from 'react'
// import Home from '../src/components/Home_Page/home_page'
// import Contact from '../src/components/Contact_US_Page/contact_us_page'
// import {Routes, Route} from 'react-router-dom'
import Login_Page from './components/Login_Page/Login_Page'

const App = () => {
  return (
    <>
    {/* <Routes>
    <Route path='/' element={<Home/> }/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes> */}
    <Login_Page/>
    </>
  )
}

export default App