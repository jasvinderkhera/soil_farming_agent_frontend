import React from 'react'
import './Footer.css'
import { images } from '../../constants/imagePath'

function Footer() {
  return (
    <footer className='footer light-bg'>
      <div className="container px-4 pt-5 pb-4">
      <div className="row">
      <div className="col-md-4 footerBox1 d-flex justify-content-center align-items-center flex-column">
          <img src="" alt="" className='footerLogo img-fluid'/>

          <div className="contactUs mt-5 w-100 text-center">
            <h4>Contact Us</h4>
            <div className="socialMedia mt-3 d-flex justify-content-center gap-4">
             <a href="https://www.facebook.com/people/Jass-Khera/pfbid0DepavuoNR5xuQXfJpcCr4FP55X6vxwjGWhboaPQHEHJW3uaQNmoHFAJZvtcdLcXql/" className="nav-link"> <img src={images.fb} alt="" className='img-fluid' /></a>
              <a href="https://www.instagram.com/jasskhera_1/" className="nav-link"><img src={images.insta} alt="" className='img-fluid' /></a>
              <a href="https://github.com/jasvinderkhera" className="nav-link"><img src={images.github} alt="" className='img-fluid' /></a>
              <a href="https://www.linkedin.com/in/jasskhera/" className="nav-link"><img src={images.linkedin} alt="" className='img-fluid' /></a>
            </div>
          </div>
        </div>
        <div className="col-md-8 footerBox2 mt-3 mt-md-0 d-flex flex-row flex-wrap gap-md-0 gap-4 justify-content-between">

          <div className="footerBox21">
            <h4>Features</h4>
            <ul className="list-unstyled">
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Secure Document Uploads</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Easy Sharing</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Organized Storage</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Access Anywhere</a></li>
            </ul>
          </div>
          <div className="footerBox22">
            <h4>Our Services</h4>
            <ul className="list-unstyled">
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Cloud Storage</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Data Security</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Personal Data Management</a></li>
            </ul>
          </div>
          <div className="footerBox23">
            <h4>Help and About</h4>
            <ul className="list-unstyled">
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Help & Support</a></li>
              <li><a href="" onClick={(e) => { e.preventDefault()}} className='nav-link mb-2'>Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-center fw-semibold fs-5 mt-4'>© 2024 Cloud Linker. All rights reserved.
      </p>
      </div>
    </footer>
  )
}

export default Footer