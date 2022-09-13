import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const footer = () => {
  return (
    <footer>
    <div className="row">
      <div className="col">
        <img src={Logo} alt="Logo" height={100} width={100} className="logo" />
        <p style={{textAlign:'justify'}}> Mathematics is an area of knowledge that includes such topics as numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.</p>
      </div>
      <div className="col">
        <h4>Office</h4> <br />
        <p>Kashmir Block <br />
        Iqbal Town, Lahore <br />
        Punjab, Postal Code : 54000, Pakistan</p>
        <p className='email-id'>info@onlinemathteacher.com</p>
        <p>+92 318-4318539</p>
      </div>
      <div className="col">
        <h3>Links</h3>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <div className="col"></div>
    </div>
    </footer>
  )
}

export default footer