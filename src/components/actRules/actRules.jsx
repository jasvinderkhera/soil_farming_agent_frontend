import React from 'react'
import './actRules.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { images } from '../../constants/imagePath'

function ActRules() {
  return (
    <div>
        <Header/>
        <div className="topContainer container">
        <h3 className="text-color py-4">ACT & RULES</h3>


        <div className="d-flex flex-wrap justify-content-center gap-5">
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsAgriMkt" target='_blank' className='nav-link fs-5 fw-bold'>Agricultural Marketing</a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsNutrMan" target='_blank' className='nav-link fs-5 fw-bold'>Integrated Nutrient Management
                </a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/Acts/Mechanization%20and%20Technology" target='_blank' className='nav-link fs-5 fw-bold'>Mechanization and Technology
                </a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsCoopRat" target='_blank' className='nav-link fs-5 fw-bold'>Cooperation</a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsNatuResMan" target='_blank' className='nav-link fs-5 fw-bold'>Natural Resource Management
                </a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsOffiLan" target='_blank' className='nav-link fs-5 fw-bold'>Official Language
                </a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsCropNfsm" target='_blank' className='nav-link fs-5 fw-bold'>Crops & NFSM
                </a>
            </div>
            <div className="rules light-bg p-4 d-flex flex-column justify-content-center align-items-center">
                <img src={images.document} alt=""  className='img-fluid document'/>
                <a href="https://agriwelfare.gov.in/en/ActsOilsDiv" target='_blank' className='nav-link fs-5 fw-bold'>Oilseeds Divisions
                </a>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ActRules