import React from "react";
import './testimonials.css'
import Profile1 from '../../assets/Profile1.jpg'
import Profile2 from '../../assets/Profile2.jpg'
import Profile3 from '../../assets/Profile3.jpg'

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
    <div class="one">
    <h1>Testimonials</h1>
    </div>
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
     
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={Profile1}
              alt="Profile1"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Momina Kashif</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            <b> Wow, this class really made me use my brain. It also made me realize that watching the lesson videos in a math class is super important because just reading the material and not seeing examples is not very easy. Thanks for the refresher.</b>
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={Profile2}
              alt="Profile2"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Fatima</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            <b> I thought this was a very helpful course and I enjoyed relearning things and learning things I didn't quite get the first time. Thank you for this course I appreciate this.</b>
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={Profile3}
              alt="Profile3"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Syed Asfar Ahmad Bukhari</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            <b> I felt like it was extremely helpful and exactly what I was looking for. The lessons were great and the option to spend time doing worksheets on anything I needed extra help with was perfect. Sometimes just the lesson alone was enough and sometimes I needed the confidence of working some of the practice problems, I liked that I had the options. </b>
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}