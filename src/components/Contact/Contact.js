import React from 'react';
import './Contact.css';
import founder from './founder.png'
import mailicon from './mailicon.png'
import callicon from './callicon.png'


export default function Contact() {
  return (

    <div>
      <div className='alldetails'>
        <div className='contact'>
          <div className='bodycontact'>
            <div className='contacthead'>
              Contact us on
            </div>

            <div className='mail'>
              <div className='mailicon'>
                <img src={mailicon} alt='' className='sameimg' />
              </div>
              <div className='maildetails' />
              <p className='samefonthead'>Email : </p>
              <p className='mailname  samedetails'>hello@mentoons.com </p>
            </div>

            <div className='call'>
              <div className='callicon '>
                <img src={callicon} alt='' className='sameimg' />
              </div>
              <div className='calldetails' />
              <p className='samefonthead'>Phone :

              </p>
              <p className='number samedetails'> +01 1234 567890 </p>
            </div>
            <div className='address'>

              <div className='addressdetails' />
              <p className='samefonthead'>Address : </p>
              <p className='addr'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit </p>
            </div>


          </div>

        </div>
        <div className='imgcontact'>
          <img src={founder} alt='' />
        </div>
      </div>

      <div className='leavemsgdeatils'>
        <div className='form'>

        <p className='headingmsg1'>Do you have any queries?</p>
        <p className='headingmsg2'>Leave us a message</p>
        <p className='headingmsg3'>Your contact details to get in touch</p>
        <form action=''>
          <input type='text' placeholder='Name' className='inputfield samefield name' />
          <input type='text' placeholder='Number' className='inputfield samefield'/><br />

          <input type='text' placeholder='Email' className='inputfield email'/><br />
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Message' className='inputfield textareafield' /><br />
          <button type="button" className="btn">
  <strong>SUBMIT</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>

        </form>
        </div>



      </div>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">about us</a></li>
  	 				<li><a href="/">our services</a></li>
  	 				<li><a href="/">privacy policy</a></li>
  	 				<li><a href="/">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">shipping</a></li>
  	 				<li><a href="/">returns</a></li>
  	 				<li><a href="/">order status</a></li>
  	 				<li><a href="/">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="/">watch</a></li>
  	 				<li><a href="/">bag</a></li>
  	 				<li><a href="/">shoes</a></li>
  	 				<li><a href="/">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}
