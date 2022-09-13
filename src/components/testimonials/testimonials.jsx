import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/image.png'
import './testimonials.css'

const testimonials = () => {
  return(
  <>
  <div class="one">
  <h1>Testimonials</h1>
  </div>

  <Carousel variant="dark" >
      <Carousel.Item>
        <img style={{height:'12rem'}}
          className="d-block w-100 testimonial"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Syed Asfar Ahmad Bukhari</h5>
          <p>"The instructor was very professional, presented herself well, and was kind to me especially when expressing her kudos to my lessons well done."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'12rem'}}
          className="d-block w-100 testimonial"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Momina Kashif</h5>
          <p>"The instructor was very professional, presented herself well, and was kind to me especially when expressing her kudos to my lessons well done."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'12rem'}}
          className="d-block w-100 testimonial"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Nabeel Mughal</h5>
          <p>
          "The instructor was very professional, presented herself well, and was kind to me especially when expressing her kudos to my lessons well done."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default testimonials