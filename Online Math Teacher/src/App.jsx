import React from 'react'
import Home from '../src/components/Home_Page/home_page'
import Contact from '../src/components/Contact_US_Page/contact_us_page'
import Courses from '../src/components/Courses_Page/courses_page'
import About from '../src/components/About_Us_Page/About_Us_Page'
import {Routes, Route} from 'react-router-dom'
import Calculus from '../src/components/calculus_enrollement/calculus_enrollement'
import Signup from '../src/components/Signup_Page/Signup_Page'
import Partial from '../src/components/Partial/Partial'
import Linear from '../src/components/Linear/Linear'
import Probability from '../src/components/Probability/Probability'
import Discrete from '../src/components/discrete/discrete'
import Vector from '../src/components/vector/vector'
import Geometry from '../src/components/geometry/geometry'
import Complex from '../src/components/complex/complex'
import Ordinary from '../src/components/ordinary/ordinary'



const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/> }/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/calculus' element={<Calculus/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/partial' element={<Partial/>}/>
    <Route path='/linear' element={<Linear/>}/>
    <Route path='/probability' element={<Probability/>}/>
    <Route path='/discrete' element={<Discrete/>}/>
    <Route path='/vector' element={<Vector/>}/>
    <Route path='/geometry' element={<Geometry/>}/>
    <Route path='/complex' element={<Complex/>}/>
    <Route path='/ordinary' element={<Ordinary/>}/>
    </Routes> 
    
    </>
  )
}

export default App