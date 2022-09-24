import React from 'react'
import './login.css'
import Image1 from '../../assets/avatar.svg'
import Image2 from '../../assets/bg.svg'
import Image3 from '../../assets/wave.png'


const login = () => {
  return (
    <>
    <img class="wave" alt='' src={Image3}/>
	<div class="container">
		<div class="img">
			<img alt='' src={Image2}/>
		</div>
		<div class="login-content">
			<form action="index.html">
				<img alt='' src={Image1}/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<input type="text" class="input" placeholder='Username'/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<input type="password" class="input" placeholder='Password'/>
            	   </div>
            	</div>
            	<a href="google.com">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login"/ >
            </form>
        </div>
    </div>
    <script type="text/javascript" src="./main.js"></script>
    </>
  )
}

export default login