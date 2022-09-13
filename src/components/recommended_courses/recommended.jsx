import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../../assets/Linear Algebra.png'
import image2 from '../../assets/Discrete Mathematics.png'
import './recommended.css'


const recommended = () => {
  return (
    <>
    <div class="one">
    <h1>Recommended Courses</h1>
    </div>
    <CardGroup style={{marginBottom:'2rem'}}>
    <Card className='card text-center text-white bg-dark mb-3 d-flex' style={{ width: '92%', margin:'1rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Linear Algebra</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Linear algebra helps us understanding the properties of high dimensional geometry if we know the properties of low dimensional geometry. A good understanding of linear algebra is essential for understanding and working with many machine learning algorithms, especially deep learning algorithms.
        </Card.Text>
        <Button variant="outline-info">Explore Course</Button>
      </Card.Body>
    </Card>
    <Card className='card text-center text-white bg-dark mb-3 d-flex'  style={{ width: '92%', margin:'1rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Discrete Mathematics</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Discrete Mathematics is a branch of mathematics that deals with separable and distinct numbers. Combinations, graph theory, and logical statements are included, and numbers can be finite or infinite. It is increasingly being applied in the practical fields of mathematics and computer science. It is a very good tool for reasoning and problem-solving capabilities.
        </Card.Text>
        <Button variant="outline-info">Explore Course</Button>
      </Card.Body>
    </Card>
    <Card className='card text-center text-white bg-dark mb-3 d-flex'  style={{ width: '92%', margin:'1rem'}}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Differential Geometry</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          A branch of geometry dealing with geometrical forms, mainly with curves and surfaces, by methods of mathematical analysis. In differential geometry the properties of curves and surfaces are usually studied on a small scale, i.e. the study concerns properties of sufficiently small pieces of them. In computer vision, differential geometry is used to analyze shapes.
        </Card.Text>
        <Button variant="outline-info">Explore Course</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  )
}

export default recommended