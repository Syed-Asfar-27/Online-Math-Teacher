import React from 'react'
import Button from 'react-bootstrap/Button';
import image1 from '../../assets/3.png'
import image2 from '../../assets/5.png'
import image3 from '../../assets/6.png'
import './recommended.css'
import {Link} from 'react-router-dom'


const recommended = () => {
  return (
    <>
    <div class="one">
    <h1>Recommended Courses</h1>
    </div><br /><br /><br />
    <div className='main'>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={image1} alt="" />
      </div>
      <div className='content'>
        <h2>Linear Algebra</h2>
        <p>Linear algebra helps us understanding the properties of high dimensional geometry if we know the properties of low dimensional geometry. In computer vision, differential geometry is used to analyze shapes. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/linear"><Button to='/linear' variant="outline-info">Explore Course</Button></Link>
      </div>
      
    </div>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={image2} alt="" />
      </div>
      <div className='content'>
        <h2>Discrete Mathematics</h2>
        <p>Discrete Mathematics is a branch of mathematics that deals with separable and distinct numbers. Combinations, graph theory, and logical statements are included, and numbers can be finite or infinite. It is increasingly being applied in the practical fields of mathematics and computer science. It is a very good tool for reasoning and problem-solving capabilities.</p>
        <Link to="/discrete"><Button to='/discrete' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={image3} alt="" />
      </div>
      <div className='content'>
        <h2>Differential Geometry</h2>
        <p>A branch of geometry dealing with geometrical forms, mainly with curves and surfaces, by methods of mathematical analysis. In differential geometry the properties of curves and surfaces are usually studied on a small scale, i.e. the study concerns properties of sufficiently small pieces of them. In computer vision, differential geometry is used to analyze shapes.</p>
        <Link to="/geometry"><Button to='/geometry' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default recommended