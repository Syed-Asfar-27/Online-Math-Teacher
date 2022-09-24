import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Navbar from '../navbar/navbar'
import './vector.css'
import {BsFillBarChartFill} from 'react-icons/bs'
import {BsFillBellFill} from 'react-icons/bs'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import {BsFillCloudDownloadFill} from 'react-icons/bs'
import {FaMobileAlt} from 'react-icons/fa'
import {FaCertificate} from 'react-icons/fa'
import Guarantee from '../../assets/guarantee.svg'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import {BsClockFill} from 'react-icons/bs'
import {MdDoneAll} from 'react-icons/md'
import Profile2 from '../../assets/Profile2.jpg'
import {
    MDBCol,
  } from "mdb-react-ui-kit";


import Footer from '../footer/footer'

const Vector = () => {
  return (
    <>
    <Navbar/>
    <div className='header'>
        <h2>Complete Vector & Tensor Analysis Course</h2><br />
        <h4>Everyone you need in Vector & Tensor Analysis in one course (including 3 real world projects)</h4><br />
        <Link to="/signup"><button to="/signup" className='enrollement_button'><AiOutlineShoppingCart/>&nbsp;&nbsp;Enroll Now Only In $85</button></Link>
    </div>
    <div className='lines'>
        <p>Vector & Tensor Analysis is the branch of mathematics that studies rates of change and infinitesimally small values. It provides a way to measure quantities that vary as the rate of change, such as interest rates, net worth, velocity, and acceleration.
        Vector & Tensor Analysis was developed around the year 1665 by two great thinkers: Gottfried Leibniz and Isaac Newton. Since its development, calculus has found application in a huge variety of fields, including physics, engineering, economics, and biology. It  Makes You Smarter, Increases Your Analytical Skills And Logical Reasoning Abilities, it enhances Your Problem-Solving Abilities, Teaches You How To Think Outside The Box,Enhances Your Learning Ability,it Helps You Excel In Engineering And Physics and  Sharpens Your Analytical Skills</p>
    </div>
    <div className='points'>
        
    <Container>
      <Row>
    <Col><Card className='card'>
      <Card.Body><h4><BsFillBarChartFill/>&nbsp;&nbsp;Beginner to Advanve</h4><br /></Card.Body>
    </Card></Col>
    <Col><Card className='card'>
      <Card.Body><h4><BsFillBellFill/>&nbsp;&nbsp;Lifetime Access</h4><br /></Card.Body>
    </Card></Col>
    </Row>
    </Container>
    <Container>
      <Row>
      <Col><Card className='card'>
      <Card.Body><h4><BsFillCameraVideoFill/>&nbsp;&nbsp;200 Lessons</h4><br /></Card.Body>
    </Card></Col>
    
    
    <Col><Card className='card'>
      <Card.Body><h4><CgNotes/>&nbsp;&nbsp;Exercise & Solutions</h4><br /></Card.Body>
    </Card></Col>
    </Row>
    </Container>
    
    <Container>
      <Row>
    <Col><Card className='card'>
      <Card.Body><h4><BsFillCloudDownloadFill/>&nbsp;&nbsp;Downloadable</h4><br /></Card.Body>
    </Card></Col><br />
    <Col><Card className='card'>
      <Card.Body><h4><FaMobileAlt/>&nbsp;&nbsp;Access on Mobile/Desktop</h4><br /></Card.Body>
    </Card></Col>
    </Row>
    </Container>
    <Container>
      <Row>
      <Col><Card className='card'>
      <Card.Body><h4><FaCertificate/>&nbsp;&nbsp;Certificate</h4><br /></Card.Body>
    </Card></Col>
    <Col><Card className='card'>
      <Card.Body><h4><BsClockFill/>&nbsp;&nbsp;40 Hours of Videos</h4><br /></Card.Body>
    </Card></Col>
    </Row>
    </Container>
    </div>

    <div className='learn'>
        <h2>What You'll Learn...</h2>
        <p>Along with all the fundamentals, you’ll learn...</p>
        <h5><MdDoneAll/>&nbsp;&nbsp;Functions</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Limit & Continuity</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Derivatives</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Applications of Derivatives</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Integrals</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Application of Definite Integrals </h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Transcendental Functions</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Techniques of Integration</h5>
        <h5><MdDoneAll/>&nbsp;&nbsp;Infinite Sequence and Series</h5>
    </div>
    <br /><br />

    <div className='instructor'>
    <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={Profile2}
              alt="Profile3"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
    </MDBCol>
    <Card className='info' style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Instructor Information</Card.Title>
        <Card.Text>
        Hi! My name is Ayesha Khan. I'm PhD scholar with two decades of experience. I have taught millions of people the different concepts of Vector & Tensor Analysis. I believe calculus should be fun and easy for everyone.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div><br /><br />

    <div className='guarantee'>
        <h2>30-Day Money-Back Guarantee</h2><br />
        <h4>Try it risk-free</h4><br />
        <p>I’m confident you’ll get everything you need from this course and be 100% satisfied. But in the unlikely event you decide it’s not for you just ask for a refund any time during the first 30 days and you’ll get your money back with no questions asked.</p>
        <img src={Guarantee} alt="" />
    </div>
    <br /><br /><br />
    <Footer/>
    </>
    
  )
}

export default Vector