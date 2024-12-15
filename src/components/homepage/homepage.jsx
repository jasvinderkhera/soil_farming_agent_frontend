import React from 'react'
import './homepage.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { images } from '../../constants/imagePath'

function Homepage() {
  return (
    <div className="homepage ">
      <Header/>
      <div className="topContainer container d-flex flex-column flex-md-row gap-5">
        <div className="leftCircle col-md-5 d-flex flex-column justify-content-center align-items-center">
          <div className="welcome">
            <p className="welcomeDialogue dark-text pe-5">Welcome to Our Agricultural Schemes Portal</p>
          </div>
          <div className="details">
            <p>
            Empowering farmers, enhancing productivity, and fostering sustainability—our platform connects you to the most impactful agricultural schemes. Explore resources that simplify farming, improve yields, and secure your livelihood.
            </p>

           <p className="text-center"> <a href="" className="nav-link btn btn-success mx-3 py-2 px-5 d-inline-block">Get Started</a></p>
          </div>
         
        </div>
        <div className="rightCircle col-md-7">
          <img src={images.vector1} alt="" className='img-fluid' />
        </div>
      </div>
      <div className="choose d-flex flex-column flex-md-row gap-md-5 gap-3 my-5 container">
        <div className="chooseBox2 col-md-7">
          <img src={images.vector2} alt="" className="img-fluid"/>
        </div>
        <div className="chooseBox1 col-md-5">
          <div className="featuretitle text-center mb-5">
            <p>Why Choose Us ?</p>
          </div>
          <div className="featuresList">
            <ul className="pe-4">
              <li className="mb-3">
              Simplified Information: Access concise and up-to-date details on government and private schemes.
              </li>
              <li className="mb-3">
              Expert Guidance: Get personalized advice to select the best schemes for your needs.
              </li>
              <li className="mb-3">
              Quick Assistance: Navigate the application process with ease using our step-by-step guidance.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="features d-flex flex-column-reverse flex-md-row gap-5 my-5 container" id="features">
        <div className="featureBox1 col-md-5 p-4">
          <div className="featuretitle text-md-center text-start p-4">
            <p>Features</p>
          </div>
          <div className="featuresList d-flex justify-content-center align-items-center ">
            <ul>
              <li className="mb-3">
              Direct benefit transfer
              </li>
              <li className="mb-3">
              Simplified application process
              </li>
              <li className="mb-3">
              Timely disbursement of funds
              </li>
              <li className="mb-3">
              Transparent and accountable system
              </li>
            </ul>
          </div>
        </div>
        <div className="featureBox2 col-md-7">
          <img src={images.vector3} alt="" className="img-fluid"/>
        </div>
      </div>
      
      <div className="works d-flex flex-column-reverse flex-md-row gap-5 my-5 container">
      <div className="workBox2 col-md-7">
          <div className="videoBox mx-5 h-100 rounded-5 overflow-hidden">
            <img src={images.vector4} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="workBox1 col-md-4 d-flex justify-content-center align-content-center flex-column">
          <div className="featuretitle text-center mb-3">
            <p>How to Apply</p>
          </div>
          <div className="workList">
            <ol>
              <li className="d-flex align-items-start  mb-3">
              1. Step-by-Step Guide: A simple, easy-to-follow guide that outlines the application process.
              </li>
              <li className="d-flex align-items-start  mb-3">
              2. Required Documents: A list of necessary documents.
              </li>
              <li className="d-flex align-items-start  mb-3">
              3. Important Dates: Deadlines for application submission and other important dates.
              </li>
            </ol>
          </div>
        </div>
        
        
      </div>
      
        <div className="works d-flex flex-column flex-md-row gap-5 my-5 container">
        <div className="workBox1 d-flex justify-content-around align-items-center flex-column">
          <div className="download fs-1 text-center">
            <p className="p-3">Schemes</p>
          </div>
          <div className="workList text-center">
            <a href="" className="nav-link px-5 py-2 bg-success d-inline-block text-white rounded-3 fw-bold fs-5">Apply Now</a>
          </div>
        </div>
        <div className="workBox2">
          <div className="videoBox bg-dark mx-5 h-100 rounded-5">
            <img src={images.play} alt="" className="img-fluid h-100"/>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage