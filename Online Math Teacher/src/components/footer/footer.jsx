import React from 'react'
import './footer.css'
import Button from 'react-bootstrap/Button';
import Image from '../../assets/wave1.png'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import {Link} from 'react-router-dom'

const footer = () => {
  return (
    <>
    <footer>
    <div className='animated'>
      <div style={{ backgroundImage: 'url(' + Image + ')' }} className='wave' id='wave1'></div>
      <div style={{ backgroundImage: 'url(' + Image + ')' }} className='wave' id='wave2'></div>
      <div style={{ backgroundImage: 'url(' + Image + ')' }} className='wave' id='wave3'></div>
      <div style={{ backgroundImage: 'url(' + Image + ')' }} className='wave' id='wave4'></div>
      <div style={{ backgroundImage: 'url(' + Image + ')' }} className='wave' id='wave5'></div>
    </div>
    <ul className='icons'>
      <li><Button><FiFacebook/></Button></li>
      <li><Button ><FiTwitter/></Button></li>
      <li><Button><FiInstagram/></Button></li>
      <li><Button><FiLinkedin/></Button></li>
    </ul>
    <ul className='timeline'>
      <li><Link to="/"><h5>Home</h5></Link></li>
      <li><Link to="/About"><h5>About</h5></Link></li>
      <li><Link to="/Courses"><h5>Courses</h5></Link></li>
      <li><Link to="/Contact"><h5>Contact</h5></Link></li>

    </ul>
    <p> &copy; 2022 Online Math Teacher | All Right Reserved</p>
    </footer>
    </>
  )
}

export default footer