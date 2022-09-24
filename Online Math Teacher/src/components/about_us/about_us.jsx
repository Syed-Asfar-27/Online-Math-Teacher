import React from 'react'
import './about_us.css'
import Image from '../../assets/logo.png'

const about_us = () => {
  return (

     <div class="about_section" id="About">
        <div class="about_img">
            <img src={Image} alt=""/>
        </div>
        <div class="about_details">
            <h1>About Me</h1>
            <p style={{textAlign:'justify'}}><b style={{color:'red'}}> Our Vision</b> To be a training institute of choice in the region, providing quality skill-based education that is affordable, aligned with modern digital era & international standards. <br /><br /> <b style={{color:'blue'}}> Our Mission </b>
            To enhance our students’ skills technically, intellectually & digitally, enabling them to attain excellence in their professional fields. <br /><br />
            <b style={{color:'orange'}}> Core Values</b> <br />
            <i> Integrity :</i> We put honesty and ethical responsibility at the core of everything we do. <br />

            <i> Respect :</i> We treat everyone with dignity and value the wisdom and expertise of the people that surround us. <br />

            <i> Tolerance :</i> We accept the existence of different views, ideas, and people even if we may disagree with them. <br />

            <i> Commitment :</i> We are passionate and determined to work hard in order to achieve our goals. <br />

            <i> Service :</i> We believe in helping our community and working together to empower each other. <br />

            <i> Creativity :</i> We celebrate innovation and encourage new ways to think
            </p>
        </div>
    </div>
    

  )
}

export default about_us