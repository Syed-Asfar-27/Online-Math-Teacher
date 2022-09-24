import React from 'react'
import './contact_us.css'
import Image from '../../assets/contact_us.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact_us = () => {

	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
	

    emailjs.sendForm('service_ll06axr', 'template_zsij0se', form.current, 'UKNH39WyPpWGZDLtN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
		  
      });
	  e.target.reset()
  };

  return (
    <>
    <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
				<img src={Image} alt="IMG"/>
			</div>

			<form class="contact1-form validate-form" ref={form} onSubmit={sendEmail}>
				<span class="contact1-form-title">
					Get in touch
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" name="subject" placeholder="Subject"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" name="message" placeholder="Message"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>

</>
  )
}

export default Contact_us