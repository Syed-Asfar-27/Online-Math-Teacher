import React from 'react'
import './courses.css'
import Image1 from  '../../assets/1.png'
import Image2 from  '../../assets/2.png'
import Image3 from  '../../assets/3.png'
import Image4 from  '../../assets/4.png'
import Image5 from  '../../assets/5.png'
import Image6 from  '../../assets/6.png'
import Image7 from  '../../assets/7.png'
import Image8 from  '../../assets/8.png'
import Image9 from  '../../assets/9.png'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function courses() {
  return (
    <>
    <div class="one">
    <h1>All Courses</h1>
    </div><br /><br /><br />
    <div className='main'>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image1} alt="" />
      </div>
      <div className='content'>
        <h2>Partial Differential Equations</h2>
        <p>In Mathematics, a partial differential equation is an equation which imposes relations between the various partial derivatives of a multivariable function. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/partial"><Button to='/partial' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image2} alt="" />
      </div>
      <div className='content'>
        <h2>Calculus</h2>
        <p>Calculus, originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical study of continuous change, in the same way that geometry is the study of shape, and algebra is the study of generalizations of arithmetic operations. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link  to="/calculus"><Button to='/calculus' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
      
      <div className="card">
      <div className="imgbox">
        <img className='image' src={Image3} alt="" />
      </div>
      <div className='content'>
        <h2>Linear Algebra</h2>
        <p>Linear algebra helps us understanding the properties of high dimensional geometry if we know the properties of low dimensional geometry. In computer vision, differential geometry is used to analyze shapes. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/linear"><Button to='/linear' variant="outline-info">Explore Course</Button></Link>
      </div>
      </div>
    </div>
    
    <br /><br /><br />
    <div className='main'>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image4} alt="" />
      </div>
      <div className='content'>
        <h2>Probability & Statistics</h2>
        <p>Probability deals with predicting the likelihood of future events, while statistics involves the analysis of the frequency of past events. A good understanding of linear algebra is essential for good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/probability"><Button to='/probability' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
      <div className="card">
      <div className="imgbox">
        <img className='image' src={Image5} alt="" />
      </div>
      <div className='content'>
        <h2>Discrete Mathematics</h2>
        <p>Discrete Mathematics is a branch of mathematics that deals with separable and distinct numbers. Combinations, graph theory, and logical statements are included, and numbers can be finite or infinite. It is increasingly being applied in the practical fields of mathematics and computer science. It is a very good tool for reasoning and problem-solving capabilities.</p>
        <Link to="/discrete"><Button to='/discrete' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
      
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image6} alt="" />
      </div>
      <div className='content'>
        <h2>Differential Geometry</h2>
        <p>A branch of geometry dealing with geometrical forms, mainly with curves and surfaces, by methods of mathematical analysis. In differential geometry the properties of curves and surfaces are usually studied on a small scale, i.e. the study concerns properties of sufficiently small pieces of them. In computer vision, differential geometry is used to analyze shapes.</p>
        <Link to="/geometry"><Button to='/geometry' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    </div>
    <br /><br /><br />
    <div className='main'>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image7} alt="" />
      </div>
      <div className='content'>
        <h2>Vector & Tensor Analysis</h2>
        <p> Tensor Analysis, branch of mathematics concerned with relations or laws that remain valid regardless of the system of coordinates used to specify the quantities. Vector Analysis branch of mathematics that deals with quantities that have both magnitude and direction. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/vector"><Button to='/vector' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image8} alt="" />
      </div>
      <div className='content'>
        <h2>Complex Analysis</h2>
        <p>Complex Analysis is the study of complex numbers together with their derivatives, manipulation, and other properties. Complex analysis is an extremely powerful tool with an unexpectedly large number of practical applications to the solution of physical problems. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/complex"><Button to='/complex' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
      
    <div className="card">
      <div className="imgbox">
        <img className='image' src={Image9} alt="" />
      </div>
      <div className='content'>
        <h2>Ordinary Differential Equation</h2>
        <p>In mathematics, an Ordinary Differential Equation is a differential equation containing one or more functions of one independent variable and the derivatives of those functions. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.</p>
        <Link to="/ordinary"><Button to='/ordinary' variant="outline-info">Explore Course</Button></Link>
      </div>
    </div>
    </div>
    <br /><br /><br />
    </>
  );
}

export default courses;