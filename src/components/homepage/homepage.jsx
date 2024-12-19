import React, { useState } from 'react'
import './homepage.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { images } from '../../constants/imagePath'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="homepage">
      <Header/>
      <div>
      <div className="topContainer container d-flex flex-column flex-md-row gap-5">
        <div className="leftCircle col-md-5 d-flex flex-column justify-content-center align-items-center">
          <div className="welcome">
            <p className="welcomeDialogue dark-text pe-5">Welcome to Our Agricultural Schemes Portal</p>
          </div>
          <div className="details text-color fs-5">
            <p>
            Empowering farmers, enhancing productivity, and fostering sustainability—our platform connects you to the most impactful agricultural schemes. Explore resources that simplify farming, improve yields, and secure your livelihood.
            </p>

           <p className="text-center startBtn rounded-2 light-bg"> <Link to="login" className="nav-link btn btn-success py-2 px-5">Get Started</Link></p>
          </div>
         
        </div>
        <div className="rightCircle col-md-7">
          <img src={images.vector1} alt="" className='img-fluid' />
        </div>
      </div>
      <div className="features d-flex flex-column-reverse flex-md-row  gap-md-3 my-5 container" id="features">
        <div className="featureBox1 col-md-6 p-4">
          <div className="featuretitle text-md-center d-none d-md-block text-start px-4">
            <p className='dark-text'>Notice</p>
          </div>
          <div className="featuresList d-flex justify-content-center align-items-center text-color fs-5">
            <ul>
              <li className="mb-3">
              Seasonal Offerings: As the new planting season approaches, we are offering special discounts on select seeds, fertilizers, and farming equipment. Be sure to check our website regularly for the latest deals and promotions.
              </li>
              <li className="mb-3">
              Shipping Updates: Due to seasonal demand, please note that delivery times may be slightly longer than usual. We encourage you to place orders early to ensure timely delivery for your farming needs.
              </li>
              <li className="mb-3">
              New Features on the Website: We are excited to announce that we have launched new tools and resources on our website to assist you in better managing your crops and equipment.
              </li>
              <li className="mb-3">
              Sustainability Initiatives: Our commitment to sustainability continues to grow. We have partnered with local farms to promote eco-friendly practices and soil health programs.
              </li>
            </ul>
          </div>
        </div>
        <div className="featureBox2 col-md-6 p-4">
        <div className="featuretitle text-md-center d-block d-md-none text-start px-4">
            <p className='dark-text'>Notice</p>
          </div>
          <img src={images.vector5} alt="" className="img-fluid d-block m-auto"/>
        </div>
      </div>
      <div className="choose d-flex flex-column flex-md-row gap-md-5 gap-3 my-5 container">
        <div className="chooseBox2 col-md-7">
        <div className="featuretitle text-center d-block d-md-none mb-5">
            <p className='dark-text'>Why Choose Us ?</p>
          </div>
          <img src={images.vector2} alt="" className="img-fluid"/>
        </div>
        <div className="chooseBox1 col-md-5">
          <div className="featuretitle text-center d-none d-md-block mb-5">
            <p className='dark-text mt-5'>Why Choose Us ?</p>
          </div>
          <div className="featuresList fs-5 text-color">
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
      <div className="features d-flex flex-column-reverse flex-md-row gap-1 gap-md-3 my-5 container" id="features">
        <div className="featureBox1 col-md-5 p-4">
          <div className="featuretitle text-md-center d-none d-md-block text-start p-4">
            <p className='dark-text'>Features</p>
          </div>
          <div className="featuresList d-flex justify-content-center align-items-center text-color fs-5">
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
        <div className="featuretitle d-block d-md-none text-center p-4">
            <p className='dark-text'>Features</p>
          </div>
          <img src={images.vector3} alt="" className="img-fluid"/>
        </div>
      </div>
      
      <div className="works d-flex flex-column flex-md-row gap-5 my-5 container">
      <div className="workBox2 col-md-7">
          <div className="videoBox mx-5 h-100 rounded-5 overflow-hidden">
          <div className="featuretitle text-center mb-5 d-block d-md-none">
            <p className='dark-text'>How to Apply</p>
          </div>
            <img src={images.vector4} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="workBox1 col-md-4 d-flex justify-content-center align-content-center flex-column">
          <div className="featuretitle text-center mb-3 d-none d-md-block">
            <p className='dark-text'>How to Apply</p>
          </div>
          <div className="workList text-color fs-5">
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
      
        <div className="works d-flex flex-column justify-content-center gap-5 my-5 container">
        <div className="workBox1 d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="schemes text-center">
            <p className="p-3 fs-1">Schemes</p>
            <div className="d-flex justify-content-center flex-wrap gap-md-4 gap-3">
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1">Machine Loan</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1">Fertilizer</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Land loan</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Financial Aid</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Crop Insurance</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Technology</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Soil Health </div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Pesticide</div>
              <div className="rounded-5 avaliableSchemes px-md-5 px-4 py-2 button-bg fw-bold border border-1"> Kisan Credit Card</div>
            </div>
          </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          
        </div>
        <div className="workList text-center">
            <Link to="login" className="nav-link px-5 py-2 bg-success d-inline-block text-white rounded-3 fw-bold fs-5">Apply Now</Link>
          </div>
      
        
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage