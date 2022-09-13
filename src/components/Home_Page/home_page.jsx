import React from 'react'
import Nav from '../navbar/navbar'
import Slider from '../slider/slider'
import Recommended from '../recommended_courses/recommended'
import Testimonials from '../testimonials/testimonials'
import Footer from '../footer/footer'

const home_page = () => {
  return (
    <>
    <Nav/>
    <Slider/>
    <Recommended/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default home_page