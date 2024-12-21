import React from 'react'
import './features.css'

function Features() {
  return (
    <div className='topContainer container pt-md-5'>
         <div className="features-container">
    <header className="features-header">
      <h1>Our Features</h1>
      <p>Explore the tools and services we provide to empower farmers and simplify processes.</p>
    </header>
    <section className="features-list">
      <div className="feature-item">
        <div className="icon">📋</div>
        <h3>Scheme Management</h3>
        <p>Easily browse, apply, and track government schemes tailored for farmers.</p>
      </div>
      <div className="feature-item">
        <div className="icon">📜</div>
        <h3>Digital Notices</h3>
        <p>Stay updated with the latest announcements and notices directly on the platform.</p>
      </div>
      <div className="feature-item">
        <div className="icon">💾</div>
        <h3>Secure Document Storage</h3>
        <p>Upload, manage, and share your documents with government authorities securely.</p>
      </div>
      <div className="feature-item">
        <div className="icon">🔒</div>
        <h3>Data Privacy</h3>
        <p>Your personal information and documents are protected with industry-standard security.</p>
      </div>
      <div className="feature-item">
        <div className="icon">📊</div>
        <h3>Application Tracking</h3>
        <p>Monitor the status of your applications and receive timely updates.</p>
      </div>
      <div className="feature-item">
        <div className="icon">📞</div>
        <h3>24/7 Support</h3>
        <p>Our team is here to assist you anytime with your queries or issues.</p>
      </div>
    </section>
  </div>
    </div>
  )
}

export default Features