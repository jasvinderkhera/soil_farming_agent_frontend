import React, { useState } from 'react'
import './Header.css'
import { images } from '../../constants/imagePath'
import { Link } from 'react-router-dom'

function Header() {
    const [display,setDisplay] = useState('hide')
    const toggleMenu = () =>{
        if(display === "hide"){
            setDisplay('show')
            document.body.classList.add('modal-open')
        } else{
            document.body.classList.remove('modal-open')
            setDisplay("hide")
        }
    }

  return (
    <div>
    <div className='header-outer-container d-none d-md-block'>
    <div className='center-container header py-3 px-3 '>
        <div className="upperNav w-100 d-flex justify-content-between align-items-center">
        <div className="logo">
            <Link to="/" className="nav-link"><img src={null} alt="" className='img-fluid logoImage'/></Link>
        </div>
        <div className="menus d-flex gap-3">
            <div className="menuItem">
                <a href="" className='p-3 nav-link'>Kishan UI/UX</a>
            </div>
            <div className="menuItem">
                <Link to="/contact" className='p-3 nav-link'>Contact Us</Link>
            </div>
            <div className="menuItem">
                <a href="#features" className='p-3 nav-link'>Features</a>
            </div>
        </div>
        </div>
        <div className="container d-flex justify-content-center gap-5 p-2 align-items-center lowerNav light-bg">
            
                <a href="" className='nav-link'>Notice</a>
                <Link to='login' className='nav-link'>Login/Register</Link>
                <a href="" className='nav-link'>Schemes</a>
                <a href="" className='nav-link'>Crops</a>
                <a href="" className='nav-link'>Act & Rules</a>
                <a href="" className='nav-link'>Related Links</a>
                <a href="" className='nav-link'>About</a>
        </div>
        
    </div>
    </div>
    <div className="homepage_mobileMenu d-flex justify-content-between d-md-none">
        <img src="" alt="" className='img-fluid mobileLogo' />
    <img src={images.mobileMenu} alt="" className='img-fluid menuLogo' onClick={toggleMenu}/>
</div>
<div className="mobileMenuItems" style={display === "show" ? {display : "block"} : {display : "none"}}>
   <div className="menuItems mt-5">
   <Link to='' className="nav-link p-3 text-white fs-5 fw-bold">Kishan UI & UX</Link>
    <Link to='/contact' className="nav-link p-3 text-white fs-5 fw-bold">Contact Us</Link>
    <Link to='#features' className="nav-link p-3 text-white fs-5 fw-bold">Features</Link>
   </div>
</div>
</div>
  )
}

export default Header