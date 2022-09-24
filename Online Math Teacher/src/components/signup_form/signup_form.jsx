import React from 'react'
import './signup_form.css'
import Image from '../../assets/register.svg'

const signup_form = () => {
  return (
    <>
    <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
				<img src={Image} alt="IMG"/>
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Sign Up
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "CNIC is required">
					<input class="input1" type="text" name="cnic" placeholder="CNIC"/>
					<span class="shadow-input1"></span>
				</div>

                <div class="wrap-input1 validate-input" data-validate = "Phone Number is required">
					<input class="input1" type="text" name="phone" placeholder="Phone Number"/>
					<span class="shadow-input1"></span>
				</div>

                <div class="wrap-input1 validate-input" >
					<input class="input1" type="text" name="age" placeholder="Age"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Address is required">
					<textarea class="input1" name="address" placeholder="Address"></textarea>
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

export default signup_form