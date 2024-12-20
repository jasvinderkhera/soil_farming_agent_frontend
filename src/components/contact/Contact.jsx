import React from 'react'
import './Contact.css'
import { images } from '../../constants/imagePath'

function Contact() {
  return (
    <div>
        <div className="topContainer container">
        
        <div className="row gap-5 gap-md-0 my-5">
          <div className="ContactDeveloper col-md-6 my-md-1 d-flex flex-column px-4 py-2 justify-content-center align-items-center">
            <h4 className='mb-3'>Web Developer</h4>
            <div className="contactProfile d-flex mb-4 justify-content-around w-100 gap-5 align-items-center">
                <div className="contactPicture rounded-circle overflow-hidden border border-2">
                  <img src={images.dp} alt="" className='img-fluid'/>
                </div>
                <div className="contactBtn">
                    <a href="https://github.com/jasvinderkhera" className='nav-link px-4 py-2 bg-primary text-white rounded-2'>Contact</a>
                </div>
            </div>
            <p className='text-start fw-bold fs-5 w-75'>Jasvinder Khera</p>
            <p className='text-start fs-5 w-75'>ankitkhera15@gmail.com</p>
            <p className='text-start fs-5 w-75 fw-bold'>Frontend Developer</p>
            <a href="https://jasvinderkhera-portfolio.vercel.app/projects" target='_blank' className="navlink w-75 fs-5 text-decoration-none">Portfolio...</a>
            <div className="socialMedia w-75 mt-3 d-flex justify-content-start gap-4">
              <a href="https://github.com/jasvinderkhera" className="nav-link" target='_blank'><img src={images.github} alt="" className='img-fluid' /></a>
              <a href="https://www.linkedin.com/in/jasskhera/" className="nav-link" target='_blank'><img src={images.linkedin} alt="" className='img-fluid' /></a>
             <a href="https://www.facebook.com/people/Jass-Khera/pfbid0DepavuoNR5xuQXfJpcCr4FP55X6vxwjGWhboaPQHEHJW3uaQNmoHFAJZvtcdLcXql/" className="nav-link" target='_blank'> <img src={images.fb} alt="" className='img-fluid' /></a>
              <a href="https://www.instagram.com/jasskhera_1/" className="nav-link" target='_blank'><img src={images.insta} alt="" className='img-fluid' /></a>
            </div>
          </div>
          <div className="ContactDesigner col-md-6 my-md-1 flex-column px-4 py-2 d-flex justify-content-center align-items-center">
          <h4 className='mb-3'>Web Designer</h4>
          <div className="contactProfile d-flex mb-4 justify-content-around w-100 gap-5 align-items-center">
            <div className="contactPicture rounded-circle overflow-hidden border border-2">
            <img src={images.user} alt="" className='userImg'/>
            </div>
            <div className="contactBtn">
                <a href="" onClick={(e) => { e.preventDefault()}} className='nav-link px-4 py-2 bg-primary text-white rounded-2'>Contact</a>
            </div>
          </div>
          <p className='text-start fw-bold fs-5 w-75'>Kishan Sharma</p>
          <p className='text-start fs-5 w-75'>Kishan Sharma</p>
          <p className='text-start fs-5 w-75 fw-bold'>UI/UX Designer</p>
          <a href="" onClick={(e) => { e.preventDefault()}} className="navlink w-75 fs-5 text-decoration-none">Portfolio...</a>
          <div className="socialMedia w-75 mt-3 d-flex justify-content-start gap-4">
              <a href="" onClick={(e) => { e.preventDefault()}} className="nav-link" target='_blank'><img src={images.github} alt="" className='img-fluid' /></a>
              <a href="" onClick={(e) => { e.preventDefault()}} className="nav-link" target='_blank'><img src={images.linkedin} alt="" className='img-fluid' /></a>
             <a href="" onClick={(e) => { e.preventDefault()}} className="nav-link" target='_blank'> <img src={images.fb} alt="" className='img-fluid' /></a>
              <a href="" onClick={(e) => { e.preventDefault()}} className="nav-link" target='_blank'><img src={images.insta} alt="" className='img-fluid' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact