import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../assets/Slider1_resize.jpeg'
import Slider2 from '../../assets/Slider2_resize.jpeg'
import Slider3 from '../../assets/Slider3_resize.jpeg'
import Slider4 from '../../assets/Slider4_resize.jpeg'
import Slider5 from '../../assets/Slider5_resize.jpeg'


const slider = () => {
  return (
    <Carousel style={{marginBottom:'2rem'}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="2nd Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="3rd Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="4th Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider5}
          alt="5th Slide"
        />
      </Carousel.Item>
     
    </Carousel>
  )
}

export default slider